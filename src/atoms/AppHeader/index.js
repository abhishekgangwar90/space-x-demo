import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './headerStyle';

function AppHeader({ title }) {
  return <Header>{title}</Header>;
}

AppHeader.defaultProps = {
  title: 'default Title',
};

AppHeader.propTypes = {
  title: PropTypes.string,
};

export default AppHeader;
