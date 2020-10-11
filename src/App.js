import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import PageNotFound from './pages/PageNotFound';
import SpaceXLaunch from './pages/SpaceXLaunch';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={SpaceXLaunch} />
      <Route path="/no" exact component={PageNotFound} />
    </Switch>
  );
}

export default App;
