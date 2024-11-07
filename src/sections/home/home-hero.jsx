import Image from 'next/image';
import { RouterLink } from '@/routes/components';

import {
  Box,
  Container,
  Typography,
  Grid2 as Grid,
  Button,
} from '@mui/material';

export function HomeHero() {
  return (
    <Box sx={{ width: '100%', minHeight: '50vh', mt: 8 }}>
      <Container dir='rtl' maxWidth='xl'>
        <Grid container spacing={4} display='flex' alignItems='center'>
          <Grid size={{ xs: '12', md: 6 }}>
            <Typography
              variant='h1'
              sx={{
                fontSize: '2.2rem',
                fontWeight: 800,
              }}
            >
              <span style={{ color: '#1976d2' }}>YourHost</span>, פתרונות אחסון
              מתקדמים
            </Typography>
            <Typography
              variant='body1'
              sx={{
                mt: 1.6,
                fontSize: '1.2rem',
                fontWeight: 500,
              }}
            >
              אנו מספקים פתרונות אחסון מתקדמים לפרויקטים שלך. עם טכנולוגיות
              ההגנה החדישות ביותר, המידע שלך מוגן 24/7. כל השירותים שלנו מיועדים
              לפרויקטים גדולים וקטנים כאחד, ומציעים מהירות, אבטחה, ותמיכה מלאה
              מסביב לשעון.
            </Typography>

            <Box sx={{ mt: 3, display: 'flex', gap: 1 }}>
              <Button
                component={RouterLink}
                href='/services/virtual-servers'
                variant='contained'
                size='large'
              >
                צפה בתוכניות
              </Button>
              <Button
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
                src='/assets/illustrations/computer-server.svg'
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
