import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import PageNotFound from './pages/PageNotFound';
import SpaceXLaunch from './pages/SpaceXLaunch';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={SpaceXLaunch} />
        <Route path="*" exact component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
