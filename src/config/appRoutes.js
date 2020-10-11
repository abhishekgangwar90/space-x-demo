import React from 'react';
import PageNotFound from '../pages/PageNotFound';
import SpaceXLaunch, { loadMissionData } from '../pages/SpaceXLaunch';

const appRoutes = [
  {
    id: 'spaceXLaunch',
    path: '/',
    exact: true,
    title: 'Space-X Launch Schedule',
    component: SpaceXLaunch,
    loadData: loadMissionData,
  },
  {
    id: 'pageNotFound',
    path: '*',
    title: 'Page Not Found',
    component: PageNotFound,
  },
];

export default appRoutes;
