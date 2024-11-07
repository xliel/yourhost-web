import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { m } from 'framer-motion';
import { varFade, MotionViewport } from '@/components/animate';

import { whyUs } from '@/data/home';

export function HomeWhyUs({ sx, ...other }) {
  const renderDescription = (
    <Stack spacing={2}>
      <Box
        component={m.div}
        variants={varFade({ distance: 24 }).inUp}
        sx={{ m: 0 }}
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={0.2}>
              <Typography
                variant='h4'
                sx={{
                  fontSize: {
                    xs: '2.8rem',
                    md: '3.2rem',
                    lg: '3.4rem',
                  },
                  fontWeight: 800,
                }}
              >
                למה
              </Typography>
              <Typography
                variant='h4'
                gutterBottom
                sx={{
                  fontSize: {
                    xs: '2.4rem',
                    md: '3rem',
                    lg: '3.6rem',
                  },
                  color: 'primary.main',
                  fontWeight: 800,
                  m: 0,
                }}
              >
                לבחור ב-YourHost?
              </Typography>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{ display: 'flex', alignItems: 'flex-end' }}
          >
            <Typography
              variant='body1'
              sx={{ fontSize: '1.2rem', fontWeight: 400 }}
            >
              אנו מספקים פתרונות אחסון מתקדמים לפרויקטים שלך. עם טכנולוגיות
              ההגנה החדישות ביותר, המידע שלך מוגן 24/7. כל השירותים שלנו מיועדים
              לפרויקטים גדולים וקטנים כאחד, ומציעים מהירות, אבטחה, ותמיכה מלאה
              מסביב לשעון. והכי חשוב - אנו מקשיבים ללקוחות שלנו.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );

  const renderContent = (
    <m.div variants={varFade().inUp}>
      <Grid container spacing={2} sx={{ mt: 4, justifyContent: 'center' }}>
        {whyUs.map((item, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Box
              sx={{
                width: '100%',
                minHeight: 220,
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                boxShadow: 1,
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 2,
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(25, 118, 210, 0.34)',
                  color: 'white',
                  fontSize: 40,
                  mb: 3,
                }}
              >
                {item.icon}
              </Box>
              <Typography
                variant='h6'
                sx={{ fontSize: '1.2rem', fontWeight: 800, mb: 0.8 }}
              >
                {item.title}
              </Typography>
              <Typography
                variant='body2'
                sx={{ fontSize: '1rem', textAlign: 'center' }}
              >
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </m.div>
  );

  return (
    <Stack component='section' sx={{ position: 'relative', ...sx }} {...other}>
      <MotionViewport sx={{ my: 14, position: 'relative' }}>
        <Container dir='rtl' maxWidth='xl'>
          {renderDescription}
          {renderContent}
        </Container>
      </MotionViewport>
    </Stack>
  );
}
