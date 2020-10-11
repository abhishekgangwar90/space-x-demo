import fs from 'fs';
import path from 'path';

import renderServerApp from '../helpers/appRenderHelper';
import reduxStoreHelper from '../helpers/reduxStoreHelper';

export default (req, res) => {
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');
  const context = {};

  // getting new instance of store every time a new request is made.
  // sort of keeping client and server redux store separate from each other.
  const store = reduxStoreHelper();

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      window.console.error('err', err);
      return res
        .status(404)
        .send('Unable to locate the file, Please try after sometime.');
    }

    const val = 400;

    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
    } else {
      res.send(
        htmlData.replace(
          '<div id="root"></div>',
          `<div id="root" class="helloWorld">${renderServerApp(
            req,
            context,
            store
          )}</div>
          <script>
            window.NAME_S = ${val}
          </script>
        `
        )
      );
    }
  });
};
