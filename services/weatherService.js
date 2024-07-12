const axios = require('axios');
const redisService = require('./redisService');

exports.getWeatherData = async (city) => {
    try {
        // Check cache first
        const cachedData = await redisService.get(city);
        if (cachedData) {
          console.log('Data retrieved from Redis cache for', city);
          return JSON.parse(cachedData);
        }
    
        console.log('Cache miss for', city);
        // If not in cache, fetch from API
        const apiData = await fetchVisualCrossing(city);
        
        // Cache the result
        if (apiData) {
          await redisService.set(city, JSON.stringify(apiData));
        }
    
        return apiData;
      } catch (error) {
        console.error('Error getting weather data:', error);
        throw error;
      }
};

const fetchVisualCrossing = async (city) => {
    const apiKey = process.env.API_KEY;
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${apiKey}`;
    
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw new Error('Failed to fetch weather data');
    }
};