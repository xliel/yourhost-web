import Image from 'next/image';
import { RouterLink } from '@/routes/components';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import { m } from 'framer-motion';
import { varFade, MotionViewport } from '@/components/animate';

export function HomeHighlight({ sx, ...other }) {
  return (
    <Stack component='section' sx={{ position: 'relative', ...sx }} {...other}>
      <MotionViewport sx={{ my: 16, position: 'relative' }}>
        <Box
          sx={{
            minHeight: 400,
            backgroundImage: 'linear-gradient(136deg, #1976d2, #573bc7)',
            py: 12,
            px: 2,
          }}
        >
          <Container dir='rtl' maxWidth='xl'>
            <Grid
              container
              spacing={4}
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: { md: 'column', lg: 'row' },
              }}
            >
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  component={m.div}
                  variants={varFade({ stagger: 0.1 }).inUp}
                  sx={{ m: 0 }}
                >
                  <Typography
                    variant='h3'
                    sx={{
                      color: 'white',
                      fontWeight: 800,
                    }}
                  >
                    איפה השרתים שלנו נמצאים?
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      mt: 2,
                      color: 'white',
                      fontWeight: 500,
                    }}
                  >
                    אנחנו מחזיקים במספר שרתים ברחבי העולם כדי להבטיח שהאתר שלך
                    יהיה זמין לכל מי שמחפש אותו. כל השרתים שלנו ממוקמים במרכזי
                    נתונים מתקדמים ומאובטחים ביותר כדי להבטיח שהמידע שלך יהיה
                    מוגן 24/7.
                  </Typography>

                  <Box
                    sx={{
                      mt: 3,
                      display: 'flex',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography
                      variant='body1'
                      sx={{ color: 'white', fontWeight: 800 }}
                    >
                      ישראל:
                    </Typography>
                    <Typography
                      component='li'
                      variant='body2'
                      sx={{ color: 'white', fontWeight: 500 }}
                    >
                      פתח תקווה
                    </Typography>
                    <Typography
                      component='li'
                      variant='body2'
                      sx={{ color: 'white', fontWeight: 500 }}
                    >
                      נתניה
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      mt: 3,
                      display: 'flex',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography
                      variant='body1'
                      sx={{ color: 'white', fontWeight: 800 }}
                    >
                      גרמניה:
                    </Typography>
                    <Typography
                      component='li'
                      variant='body2'
                      sx={{ color: 'white', fontWeight: 500 }}
                    >
                      פרנקפורט
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, md: 6 }}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <Box
                  sx={{
                    width: {
                      xl: '800px',
                      lg: '600px',
                      md: '500px',
                      xs: '100%',
                    },
                    height: {
                      xl: '440px',
                      lg: '400px',
                      md: '300px',
                      xs: '200px',
                    },
                    position: 'relative',
                    pointerEvents: 'none !important',
                    userSelect: 'none !important',
                  }}
                >
                  <Image
                    priority={true}
                    alt='Illustration of a map with locations'
                    src='/assets/illustrations/locations-map.svg'
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </MotionViewport>
    </Stack>
  );
}
