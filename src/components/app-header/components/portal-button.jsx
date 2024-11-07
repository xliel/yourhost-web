'use client';

import { RouterLink } from '@/routes/components';

import { Button } from '@mui/material';

export function PortalButton() {
  return (
    <Button
      aria-label='A link to the customer portal page'
      component={RouterLink}
      href='https://my.yourhost.co.il'
      variant='contained'
      color='primary'
      sx={{ fontWeight: 800 }}
    >
      פורטל לקוחות
    </Button>
  );
}
