import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import appRoutes from '../../src/config/appRoutes';

export default (req, context, store) => {
  return ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.path}>
        <div> {renderRoutes(appRoutes)}</div>
      </StaticRouter>
    </Provider>
  );
};
