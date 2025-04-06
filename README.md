# Weather App

A full-stack weather application that allows users to search for weather information by location and view current weather conditions along with a 5-day forecast.

**Live Demo:**

- **Frontend (Vercel):** [https://your-frontend-vercel-url.com](https://your-frontend-vercel-url.com)
- **Backend (Render):** [https://your-backend-render-url.com/api](https://your-backend-render-url.com/api)

## Features

- Search weather by location (city name or coordinates)
- Display current weather conditions and a 5-day forecast
- Export weather data
- Responsive design and geolocation support

## Tech Stack

- **Frontend:** React.js (deployed on Vercel)
- **Backend:** Node.js with Express (deployed on Render)
- **Database:** MongoDB Atlas
- **Weather API:** OpenWeatherMap

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (for local testing)
- OpenWeatherMap API key

## Setup Instructions (Local Development)

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. **Set up the backend:**

   ```bash
   cd server
   npm install
   ```

3. **Create a .env file in the server directory with:**

   ```bash
   PORT=5000
   MONGO_URI=mongodb://localhost/weather-app
   OPENWEATHER_API_KEY=your_openweather_api_key_here
   ```

4. **Set up the frontend:**

   ```bash
   cd ../client
   npm install
   ```

5. **Create a .env file in the client directory with:**
   ```bash
   REACT_APP_API_URL=http://localhost:5000/api
   ```

## Running the Application Locally

1. **Start the backend server:**

   ```bash
   cd server
   npm start
   ```

2. **Start the frontend server:**

   ```bash
   cd client
   npm start
   ```

3. **Access the application:**
   Open your browser and navigate to: https://localhost:3000

### API Endpoints

- **GET** `/api/weather?location=<location>` - Get current weather and forecast
- **GET** `/api/weather/saved` - Get saved weather data
- **PUT** `/api/weather/:id` - Update saved weather data
- **DELETE** `/api/weather/:id` - Delete saved weather data
- **GET** `/api/weather/export` - Export weather data

### Deployment

The project is deployed online with the following configurations:

- **Frontend:** Hosted on Vercel. (Ensure `REACT_APP_API_URL` is set to your production backend endpoint in Vercel.)
- **Backend:** Hosted on Render. (Configured to use environment variables for secure API keys and MongoDB Atlas connectivity.)

_Note: The above instructions are for local development. For production, refer to the live demo links above._

### Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
