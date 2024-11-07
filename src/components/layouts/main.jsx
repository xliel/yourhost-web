import '@/app/global.css';

import React from 'react';

import Box from '@mui/material/Box';

import { Navbar } from '@/components/app-header/navbar';
import { Footer } from '@/components/footer/footer';

export function MainLayout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          '@media(max-width: 599.95px)': {
            overflowX: 'hidden',
          },
        }}
      >
        {children}
      </Box>
      <Footer />
    </React.Fragment>
  );
}
