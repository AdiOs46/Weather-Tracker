# Weather API Wrapper Service

## Description

This project is a Weather API Wrapper Service that provides cached weather data using Visual Crossing's Weather API. It's built with an Express.js backend, and uses Redis for caching to improve performance and reduce API calls.

## Features

- Fetch weather data for cities using city names
- Cache weather data in Redis to reduce API calls and improve response times
- Express.js backend for handling API requests and caching logic

## Tech Stack

- Backend: Node.js, Express.js
- Caching: Redis
- API: Visual Crossing Weather API

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Redis server

## Installation

1. Clone the repository
2. Install dependencies
3. Set up environment variables:
4. Create a '.env' file in the root directory and set up the Visual Crossing API, Redis URL, port number.
5. Start the backend server
   
## Usage

1. Open your browser and navigate to `http://localhost:5173` (or the specified port).
2. Enter a city name in the URL field and submit to fetch weather data (format: localhost:5173/api/weather/city-name).
3. The application will display the weather information, either from the cache or by making a new API call in JSON.

## API Endpoints

- `GET /api/weather/:city`: Fetch weather data for the specified city code

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments

- [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api)
- [Redis](https://redis.io/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Express.js](https://expressjs.com/)
- [roadmap.sh](https://roadmap.sh/backend/project-ideas)
