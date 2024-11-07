'use client';

import React, { useState, useEffect } from 'react';

import {
  Container,
  Stack,
  Box,
  Grid2 as Grid,
  Typography,
  Divider,
} from '@mui/material';

import { legals } from '@/data/legal';

export function LegalView({}) {
  const firstLegal = legals?.[0] || {};
  const [rule, setRule] = useState({
    tab: 0,
    title: firstLegal.title || '',
    description: firstLegal.description || '',
    rules: firstLegal.rules || [],
  });

  const renderTabs = (
    <Grid container spacing={2} flexDirection='column'>
      {legals.map((legal, index) => (
        <Grid
          key={index}
          size={{ md: 12 }}
          onClick={(e) => {
            e.preventDefault();
            setRule((prevRule) => ({
              ...prevRule,
              tab: index,
              title: legal.title,
              description: legal.description,
              rules: legal.rules,
            }));
          }}
          sx={{
            width: '100%',
            cursor: 'pointer',
            borderRadius: 2,
            bgcolor:
              rule.tab === index ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.14)',
            transition: (theme) =>
              theme.transitions.create('background-color', {
                duration: theme.transitions.duration.shortest,
              }),
            '&:hover': {
              bgcolor: 'rgba(0, 0, 0, 0.3)',
            },
            '&:first-of-type, &:last-of-type': { borderRadius: 2 },
          }}
        >
          <Stack spacing={1} sx={{ p: 2, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant='h6' sx={{ fontWeight: 800 }}>
                  {legal.title}
                </Typography>
                <Typography
                  variant='body2'
                  sx={{ color: 'grey.700', fontWeight: 500 }}
                >
                  {legal.description}
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );

  const renderContent = (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        borderRadius: 2,
        p: 2,
      }}
    >
      <Typography variant='h5' sx={{ fontWeight: 800 }}>
        {rule.title}
      </Typography>
      <Typography variant='body1'>{rule.description}</Typography>
      <Divider
        sx={{
          my: 1,
          width: '100%',
          backgroundColor: 'rgbA(0, 0, 0, 0.15)',
          opacity: '1',
          borderWidth: '2px',
          borderRadius: '15px',
        }}
      />

      <Stack spacing={2}>
        {rule.rules.map((rule, i) => (
          <Box key={i}>
            <Typography variant='h6' sx={{ fontWeight: 700 }}>
              <strong>{i + 1}.</strong> {rule.title}
            </Typography>
            {Array.isArray(rule.content) ? (
              rule.content.map((content, ci) => (
                <Typography key={i} variant='body2' sx={{ fontWeight: 400 }}>
                  <strong>{ci + 1}.</strong> {content}
                </Typography>
              ))
            ) : (
              <Typography variant='body2' sx={{ fontWeight: 400 }}>
                {rule.content}
              </Typography>
            )}
            <Divider sx={{ my: 2 }} />
          </Box>
        ))}
      </Stack>
    </Box>
  );

  return (
    <Box sx={{ width: '100%', my: 14 }}>
      <Stack
        sx={{
          position: 'relative',
          backgroundColor: 'background.default',
        }}
      >
        <Container dir='rtl' maxWidth='xl'>
          <Grid container spacing={4} flexDirection='row'>
            <Grid size={{ xs: 12, md: 4, lg: 3 }}>{renderTabs}</Grid>
            <Grid size={{ xs: 12, md: 8, lg: 9 }}>{renderContent}</Grid>
          </Grid>
        </Container>
      </Stack>
    </Box>
  );
}
