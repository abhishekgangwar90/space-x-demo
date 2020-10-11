import express from 'express';
import path from 'path';

import appRenderer from './middleware/appRenderer';

const PORT = '3001';
const app = express();
const router = express.Router();

const staticFiles = path.resolve(__dirname, '..', 'build');
router.use(express.static(staticFiles));
router.use('*', appRenderer);

app.use(router);

app.listen(PORT, () => {
  console.log(`listening on Port ${PORT}`);
});
