import React, { Fragment, Suspense } from 'react';
import Footer from './components/Footer';
import NavBar from './components/navbar';
import Head from './components/HeadSection';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme from '../theme';
import GlobalStyles from '../GlobalStyles';
import Pace from '../shared/components/Pace';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Pace color={theme.palette.primary.light} />
      <Suspense fallback={<Fragment />}>
        <NavBar />
        <Head />
        <Footer />
      </Suspense>
    </MuiThemeProvider>
  );
}

export default App;
