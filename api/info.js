const marvel = require('../js/marvel.json');
const skipped_marvel = require('../js/skipped_marvel.json');

const KeyvRedis = require('@keyv/redis');
const Keyv = require('keyv');

export default async function handler(req, res) {
  const host = process.env.REDIS_URL || 'redis://localhost:6379';

  const keyvRedis = new KeyvRedis(host);
  const mcu = new Keyv({ namespace: 'mcu', store: keyvRedis });

  mcu.on('error', err => console.log('Connection Error', err));

  const data = await mcu.get('data');

  const up_next = marvel[data.index] ?? null;

  const response = {
    movies: {
      up_next,
      all_movies: marvel,
      skipped: skipped_marvel
    },
    ...data,
    background_color: '#e62429',
    title: 'Marvel'
  };

  return res.json(response);
}
