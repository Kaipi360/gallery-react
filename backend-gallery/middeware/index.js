import { Router } from 'express';
import { get } from 'axios';
import Flickr from 'flickr-sdk';
import logger from '../utils/logger';

const app = Router();

app.use((req, res, next) => {
  logger.info('URL:', req.url);
  next();
});

app.get('/api/search', async (req, res) => {
  try {
    const flickr = new Flickr('549da579245b015f6b47395bfff7833e');
    const results = await flickr.photos.search({
      text: 'doggo'
    });
    const formatedBody = {
      ...results.body,
      photos: {
        ...results.body.photos,
        photo: results.body.photos.photo.map(photo => ({
          ...photo,
          uri: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${
            photo.id
          }_${photo.secret}.jpg`
        }))
      }
    };
    res.end(JSON.stringify(formatedBody));
  } catch (e) {
    logger.error(e);
  }
  res.send(JSON.stringify(token));
});

export default app;
