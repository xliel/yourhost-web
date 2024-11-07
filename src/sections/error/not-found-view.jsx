'use client';

import Image from 'next/image';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { RouterLink } from '@/routes/components';

import { m } from 'framer-motion';
import { varBounce, MotionContainer } from '@/components/animate';

export function NotFoundView() {
  return (
    <Box
      sx={{
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        py: { xs: 5, md: 10, lg: 12 },
      }}
    >
      <Container component={MotionContainer}>
        <m.div variants={varBounce().in}>
          <Typography
            variant='h1'
            sx={{
              mb: 1,
              color: 'white',
              fontSize: '2.8rem',
            }}
          >
            הדף לא נמצא
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography
            variant='h5'
            sx={{ color: 'text.secondary', fontWeight: 800 }}
          >
            אופס! נראה שהלכת לאיבוד
          </Typography>
          <Typography
            variant='body1'
            sx={{ color: 'text.secondary', fontWeight: 600 }}
          >
            העמוד שחיפשת לא נמצא, אבל אל תדאג! אפילו החתול שלנו לא מצליח למצוא
            את זה.
            <br />
            בוא נחזור לעמוד הבית וננסה שוב.
          </Typography>
        </m.div>

        <m.div
          variants={varBounce().in}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'none !important',
            userSelect: 'none !important',
          }}
        >
          <Image
            src='/assets/illustrations/404-cat.svg'
            alt='404'
            width={400}
            height={400}
            quality={80}
          />
        </m.div>

        <Button
          component={RouterLink}
          href='/'
          size='large'
          variant='contained'
        >
          חזרה לעמוד הבית
        </Button>
      </Container>
    </Box>
  );
}
