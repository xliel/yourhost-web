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

export function ServiceProducts({ products = [], sx, ...other }) {
  const renderPackages = (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        {products.map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 4 }}>
            <Box
              component={m.div}
              variants={
                varFade({
                  durationIn: 0.4,
                }).inUp
              }
              sx={{
                Width: '100%',
                minHeight: 280,
                p: 2,
                borderRadius: 2,
                boxShadow: '0 6px 14px 0 rgba(0, 0, 0, 0.2)',
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
                    {item.description && (
                      <Typography
                        variant='body2'
                        sx={{ color: 'grey.600', fontWeight: 500 }}
                      >
                        {item.description}
                      </Typography>
                    )}
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
                  aria-label='Click to purchase'
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
                  למעבר לרכישה
                </Button>

                <Divider sx={{ borderColor: 'grey.400' }} />

                <Stack spacing={1}>
                  {item.features.map((feature, i) => (
                    <ServiceFeature key={i} feature={feature} />
                  ))}
                </Stack>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );

  return (
    <Stack
      id='products'
      component='section'
      sx={{ position: 'relative', ...sx }}
      {...other}
    >
      <MotionViewport sx={{ my: 16, mt: 13, position: 'relative' }}>
        <Container dir='rtl' maxWidth='xl'>
          {renderPackages}
        </Container>
      </MotionViewport>
    </Stack>
  );
}

function ServiceFeature({ feature }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
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
        {feature.icon}
      </Box>
      <Typography variant='body2' sx={{ color: 'grey.700', fontWeight: 500 }}>
        {feature.text}
      </Typography>
    </Box>
  );
}
