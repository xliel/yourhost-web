import React, { useState, useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import Accordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionDetails, {
  accordionDetailsClasses,
} from '@mui/material/AccordionDetails';
import AccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';

import { IconPlus, IconMinus } from '@tabler/icons-react';

import { m } from 'framer-motion';
import { varFade, MotionViewport } from '@/components/animate';

// ----------------------------------------------------------------------

import { faqs } from '@/data/home';

// ----------------------------------------------------------------------

export function HomeFAQs({ sx, ...other }) {
  const [questions, setQuestions] = useState({
    tab: 0,
    questions: faqs?.[0]?.questions || [],
  });

  const [expanded, setExpanded] = useState(null);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const renderDescription = (
    <Typography
      gutterBottom
      component={m.h2}
      variants={varFade({ distance: 24 }).inUp}
      variant='h4'
      sx={{
        fontWeight: 800,
        textDecoration: 'underline',
        textDecorationColor: '#1976d2',
        textDecorationThickness: '3px',
        textDecorationStyle: 'initial',
        textUnderlineOffset: '0.2rem',
      }}
    >
      שאלות נפוצות
    </Typography>
  );

  const renderTabs = (
    <Grid container spacing={2} flexDirection='column'>
      {faqs.map((faq, index) => (
        <Grid
          key={index}
          size={{ md: 12 }}
          onClick={(e) => {
            e.preventDefault();
            setQuestions({
              tab: index,
              questions: faqs?.[index]?.questions || [],
            });
          }}
          sx={{
            width: '100%',
            cursor: 'pointer',
            borderRadius: 2,
            bgcolor:
              questions.tab === index
                ? 'rgba(0, 0, 0, 0.2)'
                : 'rgba(0, 0, 0, 0.14)',
            transition: (theme) =>
              theme.transitions.create('background-color', {
                duration: theme.transitions.duration.shortest,
              }),
            '&:hover': {
              bgcolor: 'rgba(0, 0, 0, 0.3)',
            },
            '&:first-of-type, &:last-of-type': { borderRadius: 2 },
          }}
        >
          <Stack spacing={1} sx={{ p: 2, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  backgroundColor: faq.iconBackground,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 1,
                }}
              >
                {faq.icon}
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant='h6' sx={{ fontWeight: 800 }}>
                  {faq.title}
                </Typography>
                <Typography
                  variant='body2'
                  sx={{ color: 'grey.700', fontWeight: 500 }}
                >
                  {faq.description}
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );

  const renderContent = (
    <Grid container spacing={2} flexDirection='column'>
      {questions?.questions &&
        questions.questions.map((item, index) => (
          <Grid key={index} size={{ md: 12 }}>
            <Accordion
              expanded={expanded === index}
              onChange={handleChange(index)}
              sx={{
                width: '100%',
                borderRadius: 2,
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                transition: (theme) =>
                  theme.transitions.create(['background-color'], {
                    duration: theme.transitions.duration.short,
                  }),
                '&::before': { display: 'none' },
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.14)',
                },
                '&:first-of-type, &:last-of-type': { borderRadius: 2 },
                [`&.${accordionClasses.expanded}`]: {
                  m: 0,
                  borderRadius: 2,
                  boxShadow: 'none',
                  bgcolor: 'rgba(0, 0, 0, 0.2)',
                },
                [`& .${accordionSummaryClasses.root}`]: {
                  py: 3,
                  px: 2.5,
                  minHeight: 'auto',
                  [`& .${accordionSummaryClasses.content}`]: {
                    m: 0,
                    [`&.${accordionSummaryClasses.expanded}`]: { m: 0 },
                  },
                },
                [`& .${accordionDetailsClasses.root}`]: {
                  px: 2.5,
                  pt: 0,
                  pb: 3,
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === index ? (
                    <IconMinus size='1.25rem' />
                  ) : (
                    <IconPlus size='1.25rem' />
                  )
                }
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
              >
                <Typography
                  variant='h6'
                  sx={{ color: '#000000', fontWeight: 800 }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Divider
                  sx={{
                    my: 1,
                    width: '100%',
                    backgroundColor: 'rgb(255 255 255 / 12%)',
                    opacity: '1',
                    borderWidth: '1px',
                    borderRadius: '15px',
                  }}
                />
                <Typography sx={{ color: 'grey.700', fontWeight: 500 }}>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
    </Grid>
  );

  return (
    <Stack id='faq' dir='rtl' component='section' sx={{ ...sx }} {...other}>
      <MotionViewport sx={{ my: 14, position: 'relative' }}>
        <Container maxWidth='xl'>
          {renderDescription}
          <Grid
            container
            spacing={2}
            sx={{ mt: 2 }}
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
          >
            <Grid size={{ xs: 12, md: 3 }}>{renderTabs}</Grid>
            <Grid size={{ xs: 12, md: 9 }}>{renderContent}</Grid>
          </Grid>
        </Container>
      </MotionViewport>
    </Stack>
  );
}
