import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

function AppHeader({ title }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
}

AppHeader.defaultProps = {
  title: "default Title",
};

AppHeader.propTypes = {
  title: PropTypes.string,
};

export default AppHeader;
