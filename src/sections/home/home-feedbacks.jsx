import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

import { m } from 'framer-motion';
import { varFade, MotionViewport } from '@/components/animate';

import { feedbacks } from '@/data/home';

const feedbackItemStyle = {
  p: 2,
  border: '1px solid',
  borderColor: 'grey.300',
  borderRadius: 1,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

export function HomeFeedbacks({ sx, ...other }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === feedbacks.length - 3 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderDescription = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography
        gutterBottom
        component={m.h2}
        variants={varFade({ distance: 24 }).inUp}
        variant='h4'
        sx={{
          color: '#1976d2',
          fontWeight: 800,
        }}
      >
        מה הלקוחות שלנו אומרים עלינו?
      </Typography>
      <Typography
        gutterBottom
        component={m.p}
        variants={varFade().inUp}
        sx={{ fontSize: '1.2rem' }}
      >
        קראו חוות דעת של לקוחות שלנו וגלו כיצד השירות שלנו עזר להם להצליח.
      </Typography>
    </Box>
  );

  const renderFeedbacks = (
    <Box
      sx={{
        mt: 3,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <m.div
        key={currentIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        style={{ display: 'flex', width: '100%' }}
      >
        <Grid container spacing={2}>
          {feedbacks
            .slice(currentIndex, currentIndex + 3)
            .map((feedback, index) => (
              <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
                <Box sx={feedbackItemStyle}>
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Image
                        src={feedback.avatar}
                        alt={feedback.name}
                        width={48}
                        height={48}
                        style={{
                          borderRadius: '50%',
                          border: '1px solid #fff',
                        }}
                      />

                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography
                          variant='h6'
                          sx={{ color: 'grey.800', mb: 0 }}
                        >
                          {feedback.name}
                        </Typography>
                        <Typography
                          variant='subtitle1'
                          sx={{ color: 'grey.700', mt: 0 }}
                        >
                          {feedback.title}
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                  <Rating
                    value={feedback.rating}
                    readOnly
                    sx={{ mt: 1, color: 'primary.main' }}
                    aria-label={`Rating of ${feedback.name}: ${feedback.rating}`}
                  />
                  <Typography sx={{ mt: 1, color: 'grey.800' }}>
                    {feedback.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
        </Grid>
      </m.div>
    </Box>
  );

  return (
    <Stack dir='rtl' component='section' sx={{ ...sx }} {...other}>
      <MotionViewport sx={{ my: 12, position: 'relative' }}>
        <Container maxWidth='xl'>
          {renderDescription}
          {renderFeedbacks}
        </Container>
      </MotionViewport>
    </Stack>
  );
}
