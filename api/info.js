import marvel from '../js/marvel.json' with { type: 'json' };
import skipped_marvel from '../js/skipped_marvel.json' with { type: 'json' };

import { Redis } from '@upstash/redis';

export default async function handler(req, res) {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });

  const data = await redis.get('mcu:data');

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
