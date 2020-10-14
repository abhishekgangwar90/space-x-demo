import React from 'react';
import fs from 'fs';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';

import appRoutes from '../../src/config/appRoutes';

/**
 * Load the application server side with existing routing
 * @param {*} req
 * @param {*} context
 * @param {*} store
 */
const getServerApp = (req, context, store) => {
  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.path}>
        <div> {renderRoutes(appRoutes)}</div>
      </StaticRouter>
    </Provider>
  );

  return `
    <div id="root">${content}</div>
    <script>
        window.INITIAL_SERVER_STATE = ${serialize(store.getState())}
    </script>
    `;
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} store
 */
export const renderServerApp = (req, res, store) => {
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');
  const context = {};

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      window.console.error('err', err);
      return res
        .status(404)
        .send('Unable to locate the file, Please try after sometime.');
    }

    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
    } else {
      res.send(
        htmlData.replace(
          '<div id="root"></div>',
          getServerApp(req, context, store)
        )
      );
    }
  });
};

export default renderServerApp;
