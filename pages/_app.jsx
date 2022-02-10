import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Container, ThemeProvider, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import theme from '../components/styles/theme';

const links = [
  {
    name: 'Search',
    href: '/',
  },
  {
    name: 'Random meal fetcher',
    href: '/random-meal',
  },
];

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap" rel="stylesheet" />
      </Head>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Navigation
          links={links.map((link) => {
            const { name, href } = link;
            return (
              <Link href={href} key={name}>
                <Typography
                  sx={{
                    margin: '12px 24px',
                    cursor: 'pointer',
                  }}
                  variant="body1"
                >
                  {name}
                </Typography>
              </Link>
            );
          })}
        />
        <Container
          maxWidth="lg"
          sx={{
            paddingBottom: '48px',
          }}
        >
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.shape({}),
};

MyApp.defaultProps = {
  pageProps: null,
};

export default MyApp;
