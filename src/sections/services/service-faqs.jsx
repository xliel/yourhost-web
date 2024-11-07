import Image from 'next/image';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { m } from 'framer-motion';
import { varFade, MotionViewport } from '@/components/animate';

export function ServiceFAQs({ faqs = [], sx, ...other }) {
  const renderDescription = (
    <Stack spacing={2}>
      <Box
        component={m.div}
        variants={varFade({ distance: 24 }).inUp}
        sx={{ m: 0 }}
      >
        <Stack spacing={0.2}>
          <Typography
            variant='h5'
            sx={{
              fontSize: {
                xs: '2.4rem',
                md: '2.8rem',
                lg: '3.2rem',
              },
              fontWeight: 800,
            }}
          >
            אתה עדיין מתלבט?
          </Typography>
          <Typography
            variant='h4'
            gutterBottom
            sx={{
              fontSize: {
                xs: '2rem',
                md: '2.4rem',
                lg: '2.8rem',
              },
              color: 'primary.main',
              fontWeight: 800,
              m: 0,
            }}
          >
            הנה קצת מידע למה כדאי לבחור בנו ולא באחרים
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );

  const renderFaqs = (
    <Box mt={8}>
      {faqs.map((faq, index) => (
        <Box
          key={index}
          component={m.div}
          variants={varFade().inUp}
          sx={{
            mt: 10,
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            boxShadow: '0 6px 14px 0 rgba(0, 0, 0, 0.2)',
            borderRadius: 2,
            p: 3,
          }}
        >
          {index % 2 == 0 ? (
            <Grid
              container
              spacing={4}
              sx={{
                flexDirection: { xs: 'column', md: 'row' },
              }}
            >
              <Grid size={{ xs: 12, md: 8 }}>
                <Stack
                  component={m.div}
                  variants={varFade().inRight}
                  spacing={2}
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  {faq.title && typeof faq.title === 'string' ? (
                    <Typography
                      variant='h5'
                      sx={{
                        fontSize: '2rem',
                        fontWeight: 800,
                      }}
                    >
                      {faq.title}
                    </Typography>
                  ) : (
                    faq.title
                  )}
                  {faq.description && typeof faq.description === 'string' ? (
                    <Typography variant='body1'>{faq.description}</Typography>
                  ) : (
                    faq.description
                  )}
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  component={m.div}
                  variants={varFade().inLeft}
                  sx={{
                    width: {
                      xl: '500px',
                      lg: '400px',
                      md: '300px',
                      xs: '100%',
                    },
                    height: {
                      xl: '300px',
                      lg: '250px',
                      md: '200px',
                      xs: '160px',
                    },
                    position: 'relative',
                    pointerEvents: 'none !important',
                    userSelect: 'none !important',
                  }}
                >
                  <Image
                    fill
                    alt={faq.title}
                    src={faq.banner}
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
              </Grid>
            </Grid>
          ) : (
            <Grid
              container
              spacing={4}
              sx={{
                flexDirection: { xs: 'column', md: 'row' },
              }}
            >
              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  component={m.div}
                  variants={varFade().inLeft}
                  sx={{
                    width: {
                      xl: '500px',
                      lg: '400px',
                      md: '300px',
                      xs: '100%',
                    },
                    height: {
                      xl: '300px',
                      lg: '250px',
                      md: '200px',
                      xs: '160px',
                    },
                    position: 'relative',
                    pointerEvents: 'none !important',
                    userSelect: 'none !important',
                  }}
                >
                  <Image
                    fill
                    alt={faq.title}
                    src={faq.banner}
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 8 }}>
                <Stack
                  component={m.div}
                  variants={varFade().inRight}
                  spacing={2}
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  {faq.title && typeof faq.title === 'string' ? (
                    <Typography
                      variant='h5'
                      sx={{
                        fontSize: '2rem',
                        fontWeight: 800,
                      }}
                    >
                      {faq.title}
                    </Typography>
                  ) : (
                    faq.title
                  )}
                  {faq.description && typeof faq.description === 'string' ? (
                    <Typography variant='body1'>{faq.description}</Typography>
                  ) : (
                    faq.description
                  )}
                </Stack>
              </Grid>
            </Grid>
          )}
        </Box>
      ))}
    </Box>
  );

  return (
    <Stack
      id='products'
      component='section'
      sx={{ position: 'relative', ...sx }}
      {...other}
    >
      <MotionViewport sx={{ my: 16, position: 'relative' }}>
        <Container dir='rtl' maxWidth='xl'>
          {renderDescription}
          {renderFaqs}
        </Container>
      </MotionViewport>
    </Stack>
  );
}
