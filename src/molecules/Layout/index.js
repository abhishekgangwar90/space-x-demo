import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history';

import AppHeader from "../../atoms/AppHeader";
import Footer from "../../atoms/Footer";
import AppRoutes from "./AppRoutes";

const history = createMemoryHistory();

function Layout() {
  return (
    <Router history={history}>
      <AppHeader title={"Space-x Launch Schedule"} />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default Layout;
