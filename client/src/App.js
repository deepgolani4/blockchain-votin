import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { SnackbarProvider } from 'notistack';
import HomePage from './finalPage/App';
var hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <SnackbarProvider maxSnack={3}>
        <HomePage />
      </SnackbarProvider>
    </Router>
  );
}

export default App;
