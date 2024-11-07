import Image from 'next/image';
import { RouterLink } from '@/routes/components';

import {
  Box,
  Container,
  Typography,
  Grid2 as Grid,
  Button,
} from '@mui/material';

export function ServiceHero({ service }) {
  return (
    <Box sx={{ width: '100%', minHeight: '50vh', mt: 8 }}>
      <Container dir='rtl' maxWidth='xl'>
        <Grid container spacing={4} display='flex' alignItems='center'>
          <Grid size={{ xs: '12', md: 6 }}>
            {service.title && typeof service.title === 'string' ? (
              <Typography
                variant='h1'
                sx={{
                  fontSize: '2.2rem',
                  fontWeight: 800,
                }}
              >
                {service.title}
              </Typography>
            ) : (
              service.title
            )}
            {service.description && typeof service.description === 'string' ? (
              <Typography
                variant='body1'
                sx={{
                  mt: 1.6,
                  fontSize: '1.2rem',
                  fontWeight: 500,
                }}
              >
                {service.description}
              </Typography>
            ) : (
              service.description
            )}

            <Box sx={{ mt: 3, display: 'flex', gap: 1 }}>
              <Button
                aria-label='View our services'
                component={RouterLink}
                href={`/services/${service?.slug}#products`}
                variant='contained'
                size='large'
              >
                צפה בשירותים שלנו
              </Button>
              <Button
                aria-label='Contact us'
                component={RouterLink}
                href='https://my.yourhost.co.il/submitticket.php'
                variant='outlined'
                size='large'
              >
                צור קשר
              </Button>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            display={{ xs: 'none', md: 'block', lg: 'block' }}
          >
            <Box
              sx={{
                width: { xl: '800px', lg: '600px', md: '500px' },
                height: { xl: '440px', lg: '400px', md: '300px' },
                position: 'relative',
                pointerEvents: 'none !important',
                userSelect: 'none !important',
              }}
            >
              <Image
                priority={true}
                alt='Illustration of a computer server'
                src={
                  service?.banner || '/assets/illustrations/computer-server.svg'
                }
                fill
                style={{ objectFit: 'contain' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
