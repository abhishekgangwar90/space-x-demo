import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppHeader from '../../atoms/AppHeader';
import Footer from '../../atoms/Footer';
import AppRoutes from './AppRoutes';

function Layout() {
  return (
    <Router>
      <AppHeader title="Space-x Launch Schedule" />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default Layout;
