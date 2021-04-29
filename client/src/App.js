import {Router, Switch} from "react-router-dom";
import { createBrowserHistory } from 'history';
import React from "react";

import HomePage from './finalPage/App';
import Search from './VotingPages/beastPage'
var hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
    <HomePage />

  </Router>
     
    
  );
}

export default App;
