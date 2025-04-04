# AtmosVue - Weather Application

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

- React.js
- CSS3 (Flexbox, Grid, Animations)
- Axios
- Environment Variables

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- CORS
- Nodemon

### APIs

- OpenWeatherMap API
- MongoDB Atlas

## Installation

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/atmosvue.git
cd atmosvue
```

2. Install backend dependencies:

```bash
cd server
npm install
```

3. Install frontend dependencies:

```bash
cd ../client
npm install
```

4. Create environment variables:

Backend (.env in server directory):

```
PORT=3001
MONGO_URI=your_mongodb_uri
OPENWEATHER_API_KEY=your_api_key
```

Frontend (.env in client directory):

```
REACT_APP_API_URL=http://localhost:3001/api
```

## Running the Application

1. Start the backend server:

```bash
cd server
npm run dev
```

2. Start the frontend development server:

```bash
cd client
npm start
```

3. Access the application:

- Frontend: http://localhost:3000
- Backend API: http://localhost:3001/api

## Project Structure

```
atmosvue/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   │   ├── components/    # React components
│   │   ├── App.js         # Main application component
│   │   └── App.css        # Styles
│   └── package.json       # Frontend dependencies
├── server/                # Backend Node.js application
│   ├── controllers/       # Route controllers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── app.js             # Express application
│   └── package.json       # Backend dependencies
└── README.md              # Project documentation
```

## API Endpoints

- `GET /api/weather?location=:location` - Get current weather
- `GET /api/forecast?location=:location` - Get 5-day forecast

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenWeatherMap API for weather data
- MongoDB Atlas for database hosting
- React.js community for excellent documentation
