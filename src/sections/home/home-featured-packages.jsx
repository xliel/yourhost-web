import { RouterLink } from '@/routes/components';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import { IconCheck } from '@tabler/icons-react';

import { m } from 'framer-motion';
import { varFade, MotionViewport } from '@/components/animate';

import { featuredPackages } from '@/data/home';

export function HomeFeaturedPackages({ sx, ...other }) {
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
                חבילות מומלצות
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
                לכל סוגי הפרויקטים
              </Typography>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{ display: 'flex', alignItems: 'flex-end' }}
          >
            <Typography
              variant='body1'
              component={m.p}
              variants={varFade().inUp}
              sx={{ fontSize: '1.2rem' }}
            >
              כאן תוכלו למצוא את החבילות המומלצות שלנו, המתאימות לכל סוגי
              הפרויקטים. כל חבילה כוללת את כל הכלים והשירותים שנדרשים לפרויקט
              שלך, ומציעה תמיכה מלאה מצוות התמיכה שלנו.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </Stack>
  );

  const renderPackages = (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        {featuredPackages.map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 4 }}>
            <Box
              component={m.div}
              variants={varFade().inUp}
              sx={{
                Width: '100%',
                p: 2,
                borderRadius: 2,
                boxShadow: 2,
                backgroundColor: 'background.paper',
                border: '1px solid rgba(0, 0, 0, 0.12)',
                transition: (theme) =>
                  theme.transitions.create('box-shadow', {
                    duration: theme.transitions.duration.shortest,
                  }),
                '&:hover': {
                  boxShadow: 10,
                },
              }}
            >
              <Stack spacing={2}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography
                      variant='h6'
                      sx={{ fontSize: '1.2rem', fontWeight: 800 }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: 70,
                      height: 50,
                      bgcolor: 'primary.main',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: 1,
                    }}
                  >
                    <Typography sx={{ color: 'white', fontWeight: 700 }}>
                      {item.price} {item.currency}
                    </Typography>
                  </Box>
                </Box>

                <Button
                  variant='outlined'
                  component={RouterLink}
                  href={item.href}
                  sx={{
                    width: '100%',
                    backgroundColor: 'rgba(25, 118, 210, 0.2)',
                    color: '#0080ff',
                    fontWeight: 800,
                    borderColor: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'rgba(25, 118, 210, 0.34)',
                    },
                  }}
                >
                  התחל עכשיו
                </Button>

                <Stack spacing={1}>
                  {item.features.map((feature, i) => (
                    <Box
                      key={i}
                      sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                    >
                      <Box
                        sx={{
                          width: 28,
                          height: 28,
                          backgroundColor: 'primary.main',
                          borderRadius: 9999,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          p: 1,
                        }}
                      >
                        <IconCheck color='white' size={24} />
                      </Box>
                      <Typography
                        key={i}
                        variant='body2'
                        sx={{ color: 'grey.700', fontWeight: 500 }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );

  const renderSubText = (
    <Box
      component={m.div}
      variants={varFade().inUp}
      sx={{
        mt: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant='body2'
        sx={{
          color: 'grey.700',
          fontWeight: 600,
          textAlign: 'center',
        }}
      >
        ניתן ליצור קשר עם צוות התמיכה שלנו לקבלת ייעוץ והמלצות נוספות על החבילה
        המתאימה לך.
      </Typography>
      <Button
        variant='contained'
        component={RouterLink}
        href='/services/virtual-servers'
        sx={{ mt: 1, fontWeight: 800 }}
      >
        למעבר לכל החבילות
      </Button>
    </Box>
  );

  return (
    <Stack component='section' sx={{ position: 'relative', ...sx }} {...other}>
      <MotionViewport sx={{ my: 14, position: 'relative' }}>
        <Container dir='rtl' maxWidth='xl'>
          {renderDescription}
          {renderPackages}
          {renderSubText}
        </Container>
      </MotionViewport>
    </Stack>
  );
}
