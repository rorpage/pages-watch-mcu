const KeyvRedis = require('@keyv/redis');
const Keyv = require('keyv');

export default async function handler(req, res) {
  const host = process.env.REDIS_URL || 'redis://localhost:6379';

  const keyvRedis = new KeyvRedis(host);
  const mcu = new Keyv({ namespace: 'mcu', store: keyvRedis });

  mcu.on('error', err => console.log('Connection Error', err));

  const data = await mcu.get('data');

  let background_color = '#000000';

  if (data.series === 0) {
    background_color = '#e62429';
  }

  const response = {
    ...data,
    background_color
  };

  return res.json(response);
}
