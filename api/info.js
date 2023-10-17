const KeyvRedis = require('@keyv/redis');
const Keyv = require('keyv');

export default async function handler(req, res) {
  const host = process.env.REDIS_URL || 'redis://localhost:6379';

  const keyvRedis = new KeyvRedis(host);
  const mcu = new Keyv({ namespace: 'mcu', store: keyvRedis });

  mcu.on('error', err => console.log('Connection Error', err));

  const data = await mcu.get('data');

  let background_color = '#000000';
  let title = 'Marvel';

  if (data.series === 0) {
    background_color = '#e62429';
    title = 'Marvel';
  } else if (data.series === 1) {
    background_color = '#000000';
    title = 'Mission: Impossible';
  } else if (data.series === 2) {
    background_color = '#000000';
    title = 'Star Wars';
  }

  const response = {
    ...data,
    background_color,
    title
  };

  return res.json(response);
}
