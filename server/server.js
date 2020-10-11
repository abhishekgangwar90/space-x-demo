import express from 'express';
import path from 'path';

import appRenderer from './middleware/appRenderer';

const PORT = '3001';
const app = express();

const staticFiles = path.resolve(__dirname, '..', 'build');
app.use(express.static(staticFiles));
app.use('*', appRenderer);

app.listen(PORT, () => {
  console.log(`listening on Port ${PORT}`);
});
