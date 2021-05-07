import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomePage from './finalPage/App';
var hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <HomePage />
    </Router>
  );
}

export default App;
