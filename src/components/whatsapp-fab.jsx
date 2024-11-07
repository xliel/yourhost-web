import { RouterLink } from '@/routes/components';

import Fab from '@mui/material/Fab';

import { IconBrandWhatsapp } from '@tabler/icons-react';

export function WhatsAppFab() {
  return (
    <Fab
      aria-label='WhatsApp Chat Button'
      component={RouterLink}
      href='https://wa.me/033751784'
      sx={{
        backgroundColor: '#25d366 !important',
        width: 54,
        height: 54,
        position: 'fixed',
        right: { xs: 24, md: 32 },
        bottom: { xs: 24, md: 32 },
        zIndex: (theme) => theme.zIndex.speedDial,
        boxShadow: (theme) => theme.shadows[24],
        transition: (theme) => theme.transitions.create('box-shadow'),
        '&:hover': {
          backgroundColor: '#25d366',
          boxShadow: (theme) => theme.shadows[25],
          transform: 'scale(1.1)',
        },
      }}
    >
      <IconBrandWhatsapp color='#fff' size={24} stroke={2} />
    </Fab>
  );
}
