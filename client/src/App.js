
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import React, { Fragment, Suspense, lazy } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Pace from "./shared/components/Pace"
import HomePage from './finalPage/App';
var hist = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Pace color={theme.palette.primary.light} />
        <Suspense fallback={<Fragment />}>
          <HomePage />
        </Suspense>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
