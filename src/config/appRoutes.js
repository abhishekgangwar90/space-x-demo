import React from 'react';
import SpaceXLaunch from "../pages/SpaceXLaunch";

export const appRoutes = [
  {
    id: "spaceXLaunch",
    link: "/",
    title: "Space-X Launch Schedule",
    component: SpaceXLaunch,
  },
  {
    id: "spaceXLaunch",
    link: "/about",
    title: "Space-X Launch Schedule",
    component: () =>{
      return <>hello</>
    },
  }, 
];

export default appRoutes;
