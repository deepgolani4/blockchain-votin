import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./bind";
import voting from "../VotingPages/voting";

export default function Homepage() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/voting" component={voting} />
    </Switch>
  );
}
