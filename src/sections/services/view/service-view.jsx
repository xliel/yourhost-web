'use client';

import React from 'react';

import { Stack } from '@mui/material';

import { ServiceHero } from '../service-hero';
import { ServiceProducts } from '../service-products';
import { ServiceFAQs } from '../service-faqs';

export function ServiceView({ service }) {
  return (
    <React.Fragment>
      <ServiceHero service={service} />
      <Stack
        sx={{
          position: 'relative',
          backgroundColor: 'background.default',
        }}
      >
        <ServiceProducts products={service?.products || []} />
        <ServiceFAQs faqs={service?.faqs || []} />
      </Stack>
    </React.Fragment>
  );
}
