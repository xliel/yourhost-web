'use client';

import React from 'react';
import Link from 'next/link';

// material-ui
import {
  Box,
  Grid2 as Grid,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material';

import {
  IconMenu2,
  IconCaretUpFilled,
  IconCaretDownFilled,
} from '@tabler/icons-react';

import { navbar } from '@/data/navbar';

export function PagesComponent() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [groupMenu, setGroupMenu] = React.useState({});

  const handleOpenNavMenu = (event) => {
    event.preventDefault();
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: {
            xs: 'flex',
            md: 'none',
          },
          justifyContent: 'flex-end',
        }}
      >
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onClick={handleOpenNavMenu}
        >
          <IconMenu2 />
        </IconButton>

        <Menu
          id='menu-appbar'
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          elevation={0}
          sx={{
            mt: '45px',
            '& .MuiMenu-paper': {
              boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.33)',
              border: '1px solid rgba(0, 0, 0, 0.16)',
              borderRadius: 1,
              p: 1.5,
            },
            '& .MuiMenuItem-root': {
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '5px',
              },
            },
            '@media screen and (max-width: 600px)': {
              mt: '10px',
            },
          }}
        >
          {navbar.map((page, index) => (
            <Box dir='rtl' key={index}>
              {page.isGroup ? (
                <MenuItem
                  onClick={() =>
                    setGroupMenu((prev) => ({
                      ...prev,
                      [index]: !prev[index],
                    }))
                  }
                >
                  <Typography
                    variant='body1'
                    sx={{ color: '#000000', fontWeight: 500 }}
                  >
                    {page.title}
                  </Typography>
                  {groupMenu[index] ? (
                    <IconCaretUpFilled />
                  ) : (
                    <IconCaretDownFilled />
                  )}
                </MenuItem>
              ) : (
                <Link
                  key={index}
                  href={page.href}
                  passHref
                  style={{
                    width: '100%',
                    textDecoration: 'none',
                    direction: 'rtl',
                  }}
                >
                  <MenuItem>
                    <Typography
                      variant='body1'
                      sx={{ color: '#000000', fontWeight: 500 }}
                    >
                      {page.title}
                    </Typography>
                  </MenuItem>
                </Link>
              )}

              {page.isGroup && groupMenu[index] && (
                <Box>
                  <Divider
                    sx={{
                      width: '100%',
                      backgroundColor: 'rgb(0 0 0 / 15%)',
                      opacity: '1',
                      borderWidth: '1px',
                      borderRadius: '15px',
                      my: 1,
                    }}
                  />
                  {page.children.map((child, childIndex) => (
                    <Link
                      key={childIndex}
                      href={child.href}
                      passHref
                      style={{
                        width: '100%',
                        textDecoration: 'none',
                        direction: 'rtl',
                      }}
                    >
                      <MenuItem>
                        <Typography
                          variant='body1'
                          sx={{ color: '#000000', fontWeight: 500 }}
                        >
                          {child.title}
                        </Typography>
                      </MenuItem>
                    </Link>
                  ))}
                  <Divider
                    sx={{
                      width: '100%',
                      backgroundColor: 'rgb(0 0 0 / 15%)',
                      opacity: '1',
                      borderWidth: '1px',
                      borderRadius: '15px',
                      my: 1,
                    }}
                  />
                </Box>
              )}
            </Box>
          ))}
        </Menu>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          direction: 'rtl',
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          gap: 1,
        }}
      >
        {navbar.map((page, index) => (
          <React.Fragment key={index}>
            {page.isGroup ? (
              <Button
                color='inherit'
                onClick={() =>
                  setGroupMenu((prev) => ({
                    ...prev,
                    [index]: !prev[index],
                  }))
                }
                sx={{
                  display: 'flex',
                  color: '#000000',
                  fontSize: '16px',
                  fontWeight: 700,
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                {page.title}
                {groupMenu[index] ? (
                  <IconCaretUpFilled />
                ) : (
                  <IconCaretDownFilled />
                )}
              </Button>
            ) : (
              <Link
                href={page.href}
                passHref
                style={{
                  textDecoration: 'none',
                }}
              >
                <Button
                  color='inherit'
                  sx={{
                    display: 'block',
                    color: '#000000',
                    fontSize: '16px',
                    fontWeight: 700,
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    },
                  }}
                >
                  {page.title}
                </Button>
              </Link>
            )}

            {page.isGroup && groupMenu[index] && (
              <Box
                sx={{
                  mt: 7,
                  width: 500,
                  backgroundColor: 'background.paper',
                  boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.33)',
                  border: '1px solid rgba(0, 0, 0, 0.16)',
                  borderRadius: 1,
                  p: 1.5,
                  position: 'absolute',
                  zIndex: 9999,
                }}
              >
                <Typography
                  variant='h6'
                  sx={{
                    color: '#000000',
                    fontWeight: 700,
                    direction: 'rtl',
                  }}
                >
                  {page.title}
                </Typography>
                <Divider
                  sx={{
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    opacity: '1',
                    borderWidth: '2px',
                    borderRadius: '15px',
                    my: 1,
                  }}
                />

                <Grid container spacing={1}>
                  {page.children.map((child, childIndex) => (
                    <Grid
                      key={childIndex}
                      size={{
                        xs: 12,
                        md:
                          page.children.length % 2 !== 0
                            ? childIndex == page.children.length - 1
                              ? 12
                              : 6
                            : 12,
                      }}
                    >
                      <Link
                        passHref
                        href={child.href}
                        style={{
                          width: '100%',
                          textDecoration: 'none',
                        }}
                      >
                        <Box
                          dir='rtl'
                          sx={{
                            backgroundColor: 'rgba(0, 0, 0, 0.12)',
                            borderRadius: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            p: 1.5,
                            '&:hover': {
                              backgroundColor: 'rgba(0, 0, 0, 0.26)',
                              borderRadius: '5px',
                            },
                          }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'flex-start',
                              gap: 1,
                            }}
                          >
                            <Box
                              sx={{
                                width: 40,
                                height: 40,
                                backgroundColor: 'rgba(0, 149, 255, 0.3)',
                                borderRadius: 2,
                                p: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              {child.icon}
                            </Box>
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'column',
                              }}
                            >
                              <Typography
                                variant='body1'
                                sx={{ color: '#000000', fontWeight: 800 }}
                              >
                                {child.title}
                              </Typography>
                              <Typography
                                variant='body2'
                                sx={{ color: 'grey.800', fontWeight: 500 }}
                              >
                                {child.description}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </React.Fragment>
        ))}
      </Box>
    </>
  );
}
