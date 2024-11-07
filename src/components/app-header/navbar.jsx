'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Container, Box, AppBar, Toolbar, Button } from '@mui/material';

import { PortalButton } from './components/portal-button';
import { PagesComponent } from './components/pages-component';

export function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='fixed'
        elevation={0}
        sx={{
          color: '#fff',
          backgroundColor: 'background.paper',
          borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
        }}
      >
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <PortalButton />
            <PagesComponent />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
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
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
