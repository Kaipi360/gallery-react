import { createLogger } from 'bunyan';
import PrettyStream from 'bunyan-prettystream';

const stream = () => {
  const prettyStream = new PrettyStream();
  prettyStream.pipe(process.stdout);
  return prettyStream;
};

export default createLogger({
  name: 'gallery',
  streams: [
    {
      src: true,
      level: 'debug',
      stream: stream()
    }
  ]
});
