import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import fs from 'fs';
import path from 'path';
import { Provider } from 'react-redux';

import App from '../../src/App';

export default (req, res, next) => {
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    const context = {};
    if (err) {
      console.error('err', err);
      return res
        .status(404)
        .send('Unable to locate the file, Please try after sometime.');
    }
    const serverSideApp = ReactDOMServer.renderToString(
      <StaticRouter context={context} location={req.path}>
        <App />
      </StaticRouter>
    );

    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
    } else {
      return res.send(
        htmlData.replace(
          '<div id="root"></div>',
          `<div id="root">${serverSideApp}</div>`
        )
      );
    }
  });
};
