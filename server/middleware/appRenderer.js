import { matchRoutes } from 'react-router-config';

import renderServerApp from '../helpers/appRenderHelper';
import reduxStoreHelper from '../helpers/reduxStoreHelper';
import appRoutes from '../../src/config/appRoutes';

/**
 * Middleware
 * Takes care of reading html file from build folder and injecting the server side content to it
 * @param {*} req
 * @param {*} res
 */
const appRenderer = (req, res) => {
  // getting new instance of store every time a new request is made.
  // sort of keeping client and server redux store separate from each other.
  const store = reduxStoreHelper();

  const promises = matchRoutes(appRoutes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    // console.log('when promise resolved', store.getState());
    renderServerApp(req, res, store);
  });
};

export default appRenderer;
