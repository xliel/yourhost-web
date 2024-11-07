'use client';

import React from 'react';

import { Stack } from '@mui/material';

import { WhatsAppFab } from '@/components/whatsapp-fab';

import { HomeHero } from '../home-hero';
import { HomeFeedbacks } from '../home-feedbacks';
import { HomeWhyUs } from '../home-why-us';
import { HomeFeaturedPackages } from '../home-featured-packages';
import { HomeHighlight } from '../home-highlight';
import { HomeFAQs } from '../home-faqs';
import { HomeAdvertisement } from '../home-advertisement';

export function HomeView() {
  return (
    <React.Fragment>
      <WhatsAppFab />
      <HomeHero />
      <Stack
        sx={{
          position: 'relative',
          backgroundColor: 'background.default',
        }}
      >
        <HomeWhyUs />
        <HomeFeaturedPackages />
        <HomeFeedbacks />
        <HomeHighlight />
        <HomeFAQs />
        <HomeAdvertisement />
      </Stack>
    </React.Fragment>
  );
}
