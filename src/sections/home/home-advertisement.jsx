import React, { useState, useEffect } from 'react';
import { RouterLink } from '@/routes/components';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { m } from 'framer-motion';
import { varFade, MotionViewport } from '@/components/animate';

export function HomeAdvertisement({ sx, ...other }) {
  const renderDescription = (
    <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
      <Typography variant='h3' sx={{ fontWeight: 800 }}>
        פתרונות אירוח וענן
      </Typography>
      <Typography variant='h3' sx={{ fontWeight: 800, color: 'primary.main' }}>
        מתקדמים ועוצמתיים!
      </Typography>
    </Box>
  );

  const renderButton = (
    <Button
      component={RouterLink}
      href='/services/virtual-servers'
      variant='contained'
      color='primary'
      sx={{}}
    >
      צפה בתוכניות
    </Button>
  );

  return (
    <Stack
      id='advertisement'
      dir='rtl'
      component='section'
      sx={{ ...sx }}
      {...other}
    >
      <MotionViewport sx={{ my: 14, position: 'relative' }}>
        <Container maxWidth='md' sx={{ position: 'relative', zIndex: 9 }}>
          <Stack
            sx={{
              position: 'relative',
              width: '100%',
              height: 150,
              backgroundColor: 'rgba(25, 118, 210, 0.24)',
              border: '2px solid rgb(25, 118, 210)',
              borderRadius: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', md: 'row' },
              textAlign: { xs: 'center', md: 'right' },
              py: 1,
              px: 3,
            }}
          >
            {renderDescription}
            {renderButton}
          </Stack>
        </Container>
      </MotionViewport>
    </Stack>
  );
}
