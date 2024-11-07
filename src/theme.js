'use client';
import { Heebo } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const heebo = Heebo({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['hebrew', 'latin'],
  display: 'swap',
});

const theme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: heebo.style.fontFamily,
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.6rem',
      fontWeight: 600,
    },
  },
});

export default theme;
