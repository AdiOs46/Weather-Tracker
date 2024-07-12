const redis = require('redis');

const redisClient = redis.createClient({
  url: process.env.REDIS_URL
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));
redisClient.on('connect', () => console.log('Connected to Redis'));

const connectRedis = async () => {
  if (!redisClient.isReady) {
    try {
      await redisClient.connect();
      console.log('Redis connected successfully');
    } catch (error) {
      console.error('Failed to connect to Redis:', error);
    }
  } else {
    console.log('Redis connection already open');
  }
};

module.exports = { redisClient, connectRedis };