'use client';

import Image from 'next/image';
import { RouterLink } from '@/routes/components';

import {
  Box,
  Container,
  Grid2 as Grid,
  Stack,
  Typography,
  Divider,
  Link,
} from '@mui/material';
import { useTheme } from '@emotion/react';

import { IconBrandDiscordFilled } from '@tabler/icons-react';

import { SocialMediaIcon } from './components/social-media-icon';

const LINKS = [
  {
    headline: 'כללי',
    children: [
      { name: 'שאלות נפוצות', href: '#faq' },
      { name: 'פורטל לקוחות', href: 'https://my.yourhost.co.il' },
    ],
  },
  {
    headline: 'מדיניות ותנאים',
    children: [
      { name: 'תנאי שימוש', href: '/legal#terms' },
      { name: 'מדיניות פרטיות', href: '/legal#privacy' },
      { name: 'Cookie מדיניות קובצי', href: '/legal#cookies' },
      { name: 'מדיניות זיכויים', href: '/legal#refunds' },
    ],
  },
  {
    headline: 'צור קשר',
    children: [
      { name: 'פתח פנייה', href: 'https://my.yourhost.co.il/submitticket.php' },
      { name: '+972 033751784', href: 'tel:+972033751784' },
      { name: 'support@yourhost.co.il', href: 'mailto:support@yourhost.co.il' },
    ],
  },
  {
    headline: '',
    children: [],
  },
].reverse();

export function Footer({ sx }) {
  const theme = useTheme();

  const renderLogo = (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1.5,
      }}
    >
      <Image
        priority={true}
        alt='YourHost Logo'
        src='/assets/small-logo.png'
        width={48}
        height={48}
        quality={80}
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
        }}
      >
        <Typography variant='h6' sx={{ fontWeight: 800 }}>
          <span style={{ color: '#1976d2' }}>Your</span>Host
        </Typography>
        <Typography variant='body2' color='grey.800' fontWeight={500}>
          פתרונות אחסון מתקדמים
        </Typography>
      </Box>
    </Box>
  );

  const renderLinks = (layoutQuery = 'md') => (
    <Grid size={{ xs: 12, [layoutQuery]: 6 }}>
      <Stack
        spacing={4}
        sx={{
          flexDirection: 'column',
          [theme.breakpoints.up(layoutQuery)]: { flexDirection: 'row' },
        }}
      >
        {LINKS.map((list) => (
          <Stack
            key={list.headline}
            spacing={1}
            sx={{
              width: 150,
              alignItems: 'center',
              [theme.breakpoints.up(layoutQuery)]: {
                alignItems: 'flex-end',
              },
            }}
          >
            <Typography component='div' variant='overline' fontWeight={800}>
              {list.headline}
            </Typography>

            {list.children.map((link) => (
              <Link
                key={link.name}
                component={RouterLink}
                href={link.href}
                color='inherit'
                variant='body2'
                aria-label={`Link to ${link.name} page`}
              >
                {link.name}
              </Link>
            ))}
          </Stack>
        ))}
      </Stack>
    </Grid>
  );

  return (
    <>
      <Divider sx={{ my: 2, borderColor: 'grey.400' }} />
      <Box component='footer' sx={{ position: 'relative' }}>
        <Box
          component='footer'
          sx={{
            py: 5,
            position: 'relative',
            textAlign: 'center',
            bgcolor: 'background.paper',
            ...sx,
          }}
        >
          <Container>
            <Stack
              spacing={2}
              flexDirection={{ xs: 'column', md: 'row' }}
              alignItems='center'
              justifyContent={{ xs: 'center', md: 'space-between' }}
            >
              {renderLogo}
              {renderLinks()}
            </Stack>

            <Divider sx={{ my: 2, borderColor: 'grey.500' }} />

            <Stack
              spacing={2}
              flexDirection={{ xs: 'column', md: 'row' }}
              alignItems='center'
              justifyContent={{ xs: 'center', md: 'space-between' }}
            >
              <Stack
                spacing={2}
                flexDirection={{ xs: 'column', md: 'row' }}
                alignItems='center'
              >
                <Stack
                  spacing={1}
                  alignItems='flex-start'
                  flexDirection='column'
                >
                  <Typography variant='body2' color='grey.800' fontWeight={800}>
                    &copy; {new Date().getFullYear()} YourHost. All rights
                    reserved.
                  </Typography>

                  <Link
                    color='inherit'
                    variant='body2'
                    href='https://storyset.com/technology'
                  >
                    Illustrations by Freepik Storyset
                  </Link>
                </Stack>
              </Stack>

              <Box sx={{ display: 'flex', gap: 1 }}>
                <SocialMediaIcon
                  icon={<IconBrandDiscordFilled size={22} />}
                  herf='https://discord.gg/hostingil'
                  sx={{ width: 36, height: 36 }}
                  aria-label='A link to YourHost Discord server'
                />
              </Box>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}
