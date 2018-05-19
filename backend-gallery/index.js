import express from 'express';
import middeware from './middeware';
import logger from './utils/logger';

const PORT = 4000;

const app = express();

app.use(middeware);

app.listen(PORT, () => {
  logger.info(`Server up in port http://localhost:${PORT}`);
});
