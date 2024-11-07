'use client';

import React, { useState, useEffect } from 'react';

import {
  Box,
  Stack,
  Button,
  Typography,
  Alert,
  AlertTitle,
  Fade,
} from '@mui/material';

import { notifications } from '@/data/notifications';

export function NotificationsHeader() {
  if (!notifications || notifications.length === 0) {
    return null;
  }

  const [showNotifications, setShowNotifications] = useState([]);
  const [hiddenNotifications, setHiddenNotifications] = useState(
    typeof window !== 'undefined'
      ? JSON.parse(window.localStorage.getItem('hiddenNotifications')) || []
      : []
  );

  const handleHide = (id) => {
    if (typeof window !== 'undefined') {
      setShowNotifications((prev) =>
        prev.map((notification) => ({
          ...notification,
          hidden: notification.id === id,
        }))
      );

      setHiddenNotifications([...hiddenNotifications, id]);
      window.localStorage.setItem(
        'hiddenNotifications',
        JSON.stringify([...hiddenNotifications, id])
      );
    }
  };

  useEffect(() => {
    setShowNotifications(
      notifications.map((notification) => ({
        ...notification,
        hidden: hiddenNotifications.includes(notification.id),
      }))
    );

    return () => {
      setShowNotifications([]);
    };
  }, [hiddenNotifications]);

  if (showNotifications.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        width: '40%',
        position: 'fixed',
        top: '8%',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        '@media (max-width: 600px)': {
          width: '90%',
        },
      }}
    >
      <Stack spacing={1}>
        {showNotifications.map((notification, index) => (
          <Fade key={index} in={!notification?.hidden} timeout={2200}>
            <Alert
              dir='rtl'
              severity={notification.severity}
              variant='filled'
              action={
                notification.canHide ? (
                  <Button
                    size='small'
                    variant='outlined'
                    color='inherit'
                    onClick={() => handleHide(notification.id)}
                  >
                    הסתר
                  </Button>
                ) : null
              }
              sx={{
                '& .MuiAlert-icon': { ml: 1 },
                '& .MuiAlert-action': {
                  display: 'flex',
                  alignItems: 'center',
                  mr: 'auto',
                  ml: 0,
                },
              }}
            >
              {notification.title && (
                <AlertTitle>{notification.title}</AlertTitle>
              )}
              {notification.message &&
              typeof notification.message === 'string' ? (
                <Typography>{notification.message}</Typography>
              ) : (
                notification.message || null
              )}
            </Alert>
          </Fade>
        ))}
      </Stack>
    </Box>
  );
}
