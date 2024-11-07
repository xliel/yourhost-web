import Script from 'next/script';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { MotionLazy as MotionLazyProvider } from '@/components/animate/motion-lazy';
import { CookieConsentBanner } from '@/components/cookie-consent';
import { NotificationsHeader } from '@/components/notifications';

import theme from '@/theme';
import { website, keywords } from '@/data/website';

export const viewports = {};

export const metadata = {
  metadataBase: new URL(website.url),
  title: {
    default: 'YourHost | Hosting Solutions',
    template: '%s | YourHost',
  },
  applicationName: 'YourHost',
  description: website.description,
  url: website.url,
  locale: 'he_IL',
  type: 'website',
  image: '/assets/logo.png',
  keywords: keywords,
  openGraph: {
    type: 'website',
    url: website.url,
    locale: 'en_US',
    title: 'YourHost | Hosting Solutions',
    description: website.description,
    siteName: 'YourHost',
    images: [
      {
        url: '/assets/logo.png',
        alt: 'YourHost Logo',
        width: 1024,
        height: 1024,
      },
    ],
    themeColor: '#3772ff',
  },
  twitter: {
    title: 'YourHost | Hosting Solutions',
    card: 'summary',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: website.url,
    languages: {
      'he-IL': '/',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='he' suppressHydrationWarning={true}>
      <body>
        <Script
          defer
          src='https://website-widgets.pages.dev/dist/sienna.min.js'
          strategy='beforeInteractive'
        />
        
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <MotionLazyProvider>
              <CssBaseline />
              <CookieConsentBanner />
              <NotificationsHeader />
              {children}
            </MotionLazyProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
