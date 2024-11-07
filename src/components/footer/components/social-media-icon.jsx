'use client';

import Link from 'next/link';

import { Box } from '@mui/material';

export function SocialMediaIcon({ icon, herf, sx = {}, ...other }) {
  return (
    <Link
      href={herf}
      passHref
      style={{ textDecoration: 'none', color: '#fff' }}
      {...other}
    >
      <Box
        sx={{
          width: 48,
          height: 48,
          backgroundColor: 'primary.main',
          border: '1px solid rgba(0, 0, 0, 0.3)',
          borderRadius: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
          ...sx,
        }}
      >
        {icon}
      </Box>
    </Link>
  );
}
