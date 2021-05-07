import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import HomePage from './finalPage/App';
import VoterContext from './VoterContext';

function App() {
  const [voter, setVoter] = React.useState(null);

  const updateVoter = (votes) => {
    setVoter(votes);
  };

  return (
    <Router>
      <Switch>
        <SnackbarProvider maxSnack={3}>
          <VoterContext.Provider
            value={{
              voterDetails: voter,
              setVoterDetails: updateVoter,
            }}
          >
            <HomePage />
          </VoterContext.Provider>
        </SnackbarProvider>
      </Switch>
    </Router>
  );
}

export default App;
