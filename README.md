# Weather App

A full-stack weather application that allows users to search for weather information by location and view current weather conditions along with a 5-day forecast.

## Features

- Search weather by location (city name, coordinates)
- Display current weather conditions
- Show 5-day weather forecast
- Export weather data
- Responsive design
- Geolocation support

## Tech Stack

- Frontend: React.js
- Backend: Node.js with Express
- Database: MongoDB
- Weather API: OpenWeatherMap

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- OpenWeatherMap API key

## Setup Instructions

1. Clone the repository:

```bash
git clone <repository-url>
cd weather-app
```

2. Set up the backend:

```bash
cd server
npm install
```

3. Create a `.env` file in the server directory with the following variables:

```
PORT=5000
MONGO_URI=mongodb://localhost/weather-app
OPENWEATHER_API_KEY=your_openweather_api_key_here
```

4. Set up the frontend:

```bash
cd ../client
npm install
```

5. Create a `.env` file in the client directory:

```
REACT_APP_API_URL=http://localhost:5000/api
```

## Running the Application

1. Start the backend server:

```bash
cd server
npm start
```

2. Start the frontend development server:

```bash
cd client
npm start
```

3. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

- `GET /api/weather?location=<location>` - Get current weather and forecast
- `GET /api/weather/saved` - Get saved weather data
- `PUT /api/weather/:id` - Update saved weather data
- `DELETE /api/weather/:id` - Delete saved weather data
- `GET /api/weather/export` - Export weather data

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
