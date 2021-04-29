

import Footer from './components/Footer';
import NavBar from './components/navbar';
import  Head from './components/HeadSection';
import Middle from './components/display'
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { Fragment, Suspense, lazy } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import theme from "../theme";
import GlobalStyles from "../GlobalStyles";
import Pace from "../shared/components/Pace"

import { createBrowserHistory } from 'history';
var hist = createBrowserHistory();
function App() {
    return (
   
      <BrowserRouter>
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
        
      </BrowserRouter>
      
    );
  }
  
  export default App;
  