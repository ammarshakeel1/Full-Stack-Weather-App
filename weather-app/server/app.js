require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Basic health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Routes
app.use('/api/weather', weatherRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    message: 'Server error', 
    error: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle server shutdown gracefully
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
}); 