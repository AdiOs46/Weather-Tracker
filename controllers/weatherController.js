const weatherService = require('../services/weatherService');

exports.getWeather = async (req, res) => {
    try {
        const { city } = req.params;
        const weatherData = await weatherService.getWeatherData(city);
        console.log('Sending weather data to client:', weatherData);
        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}