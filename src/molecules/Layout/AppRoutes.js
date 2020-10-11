import React from "react";
import { Route, Switch } from "react-router";
import PropTypes from "prop-types";
import PageNotFound from '../../pages/PageNotFound';
import SpaceXLaunch from "../../pages/SpaceXLaunch";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={SpaceXLaunch} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
}

AppRoutes.defaultProps = {
};

AppRoutes.propTypes = {
};

export default AppRoutes;
