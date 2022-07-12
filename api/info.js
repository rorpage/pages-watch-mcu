const Keyv = require('keyv');

export default async function handler(req, res) {
  const host = process.env.REDIS_URL || 'redis://localhost:6379';
  const mcu = new Keyv(host, { namespace: 'mcu' });

  mcu.on('error', err => console.log('Connection Error', err));

  let response = { startDate: 'June 10, 2022' };

  response.index = await mcu.get('index');

  return res.json(response);
}
