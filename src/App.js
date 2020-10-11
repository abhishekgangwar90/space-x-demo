import React from 'react';
import { Switch } from 'react-router';
import { renderRoutes } from 'react-router-config';
import './App.css';

// import PageNotFound from './pages/PageNotFound';
// import SpaceXLaunch from './pages/SpaceXLaunch';
import appRoutes from './config/appRoutes';

function App() {
  return (
    <div className="App">
      <Switch>{renderRoutes(appRoutes)}</Switch>
    </div>
  );
}

export default App;
