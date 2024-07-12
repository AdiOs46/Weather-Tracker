const express = require('express');
const { redisClient, connectRedis } = require('./config/redis');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const weatherRoutes = require('./routes/weatherRoutes');

const app = express();

// Middleware
app.use(helmet()); // Helps secure your app with various HTTP headers
app.use(cors()); // Enables CORS for all routes
app.use(morgan('dev')); // HTTP request logger
app.use(express.json()); // Parses JSON bodies

// Routes
app.use('/api/weather', weatherRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

const startServer = async () => {
    try {
        await connectRedis();

        const PORT = process.env.PORT;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch(err) {
        console.error('Failed to connect to Redis', err);
        process.exit(1);
    }
}

startServer();