const { redisClient } = require('../config/redis');

const DEFAULT_EXPIRATION = process.env.DEFAULT_EXPIRATION; // 1 hour

exports.get = async (key) => {
  try {
    console.log('Attempting to get from Redis:', key);
    const value = await redisClient.get(key);
    console.log('Retrieved from Redis:', key, value);
    return value;
  } catch (error) {
    console.error('Error getting data from Redis:', error);
    return null;
  }
};

exports.set = async (key, value, expiration = DEFAULT_EXPIRATION) => {
  try {
    console.log('Attempting to set in Redis:', key, value);
    await redisClient.set(key, value, {
      EX: expiration
    });
    console.log('Stored in Redis:', key);
  } catch (error) {
    console.error('Error setting data in Redis:', error);
  }
};