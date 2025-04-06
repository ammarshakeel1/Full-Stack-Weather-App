# Weather Application

A modern, full-stack weather application that provides real-time weather data and 5-day forecasts for any location worldwide.

## Features

- Real-time weather data display
- 5-day weather forecast
- Temperature unit toggle (Fahrenheit/Celsius)
- Detailed weather metrics (humidity, wind speed, etc.)
- Responsive design for all devices
- Error handling and loading states

## Tech Stack

### Frontend

- **React.js:** Modern UI framework for dynamic user interfaces.
- **CSS3:** Utilizes Flexbox, Grid, and animations for responsive design.
- **Axios:** For asynchronous API requests.
- **Environment Variables:** Seamless configuration between development and production.

### Backend

- **Node.js & Express.js:** RESTful API server handling weather data requests.
- **MongoDB Atlas:** Cloud-hosted database for persistent data storage.
- **Mongoose:** Object Data Modeling (ODM) library for MongoDB.
- **dotenv:** Environment variable management.
- **CORS:** Middleware to enable cross-origin requests.
- **Nodemon:** For auto-reloading during development.

### APIs

- **OpenWeatherMap API:** Provides weather data and forecasts.
- **MongoDB Atlas:** Cloud database for persistent data storage.

## Installation & Setup (Local Development)

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ammarshakeel1/Full-Stack-Weather-App.git
   cd Full-Stack-Weather-App/weather-app
   ```

2. **Install Backend Dependencies:**

   ```bash
   cd server
   npm install
   ```

3. **Install Frontend Dependencies:**

   ```bash
   cd ../client
   npm install
   ```

4. **Configure Environment Variables:**

   - **Backend (.env in `server` directory):**

     Create a file named `.env` inside the `server` folder and add the following:

     ```env
     PORT=3001
     MONGO_URI=your_mongodb_uri
     OPENWEATHER_API_KEY=your_openweather_api_key
     ```

   - **Frontend (.env in `client` directory):**

     Create a file named `.env` inside the `client` folder and add the following:

     ```env
     REACT_APP_API_URL=http://localhost:3001/api
     ```

## Running the Application Locally

1. **Start the Backend Server (with auto-reload):**

   Open a terminal, navigate to the `server` folder, and run:

   ```bash
   cd server
   npm run dev
   ```

2. **Start the Frontend Development Server:**

   Open a new terminal, navigate to the client folder, and run:

   ```bash
   cd client
   npm start
   ```

3. **Access the Application:**

   Frontend: http://localhost:3000
   Backend: http://localhost:3001/api

## Deployment

This application is deployed online with the following configurations:

- **Frontend:** Deployed on Vercel.  
  _Note: Ensure that in production, the `REACT_APP_API_URL` environment variable is updated to your backend’s production endpoint (e.g., `https://your-render-backend-url.com/api`)._

- **Backend:** Deployed on Render.  
  Configured to use environment variables for secure API keys and MongoDB Atlas connectivity. The server listens on `process.env.PORT` as required by the hosting environment.

## Project Structure

weather-app/
├── client/ # Frontend React application
│ ├── public/ # Static files
│ ├── src/ # React components and assets
│ └── package.json # Frontend dependencies and scripts
├── server/ # Backend Node.js application
│ ├── controllers/ # Route controllers
│ ├── models/ # Database models
│ ├── routes/ # API routes
│ ├── app.js # Express application entry point
│ └── package.json # Backend dependencies and scripts
└── README.md # Project documentation (this file)

## API Endpoints

- **GET** `/api/weather?location=:location` – Get current weather and forecast
- **GET** `/api/forecast?location=:location` – Get 5-day weather forecast

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License – see the [LICENSE](../LICENSE) file for details.

## Acknowledgments

- [OpenWeatherMap API](https://openweathermap.org/) for providing weather data
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for hosting the database
- [React.js Community](https://reactjs.org/) for excellent documentation and resources
