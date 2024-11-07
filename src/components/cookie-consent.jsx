'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import { Box, Button, Typography, Divider } from '@mui/material';
import { IconCookieFilled, IconCheck } from '@tabler/icons-react';

export function CookieConsentBanner() {
  const [cookiesAccepted, setCookiesAccepted] = useState(
    typeof window !== 'undefined'
      ? window.localStorage.getItem('cookiesAccepted')
      : false
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cookiesAccepted = window.localStorage.getItem('cookiesAccepted');
      setCookiesAccepted(cookiesAccepted);
    }
  }, []);

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('cookiesAccepted', true);
      setCookiesAccepted(true);
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        margin: 2,
        maxWidth: 400,
        backgroundColor: '#ffffff',
        border: '1px solid rgba(0, 0, 0, 0.4)',
        borderRadius: 2,
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.6)',
        overflow: 'hidden',
        zIndex: 9999,
        display: !cookiesAccepted ? 'none' : 'block',
      }}
    >
      <Box
        dir='rtl'
        sx={{
          width: '100%',
          backgroundColor: 'rgb(0 0 0 / 25%)',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          p: 1,
        }}
      >
        <IconCookieFilled color='#aa7733' stroke={3} />
        <Typography variant='h6' sx={{ fontWeight: 800 }}>
          עוגיות ופרטיות
        </Typography>
      </Box>

      <Box sx={{ p: 1 }}>
        <Typography
          variant='body1'
          sx={{
            color: '#000',
            fontWeight: 700,
            direction: 'rtl',
          }}
        >
          אתר זה משתמש בעוגיות כדי לשפר את חווית המשתמש שלך.{' '}
          <Link
            href='/privacy-policy'
            passHref
            style={{
              color: 'primary.main',
            }}
          >
            מדיניות הפרטיות ושימוש בעוגיות
          </Link>{' '}
          שלנו
        </Typography>

        <Divider
          sx={{
            my: 1,
            width: '100%',
            backgroundColor: 'rgb(0 0 0 / 45%)',
            opacity: '1',
            borderWidth: '2px',
            borderRadius: '15px',
          }}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <Button
            variant='contained'
            color='primary'
            startIcon={<IconCheck />}
            onClick={handleAccept}
          >
            אישור
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
