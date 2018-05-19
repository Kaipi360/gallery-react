import { Router } from 'express';
import logger from '../utils/logger';

const app = Router();

app.use((req, res, next) => {
  logger.info('URL:', req.url);
  next();
});

app.get('/api/kai', (req, res) => {
  logger.debug('api');
  res.send(
    JSON.stringify({
      kai: 'kai'
    })
  );
});

export default app;
