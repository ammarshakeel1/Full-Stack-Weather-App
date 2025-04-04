const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    // Don't exit the process, just log the error
    // This way, the server can still run even if MongoDB is not available
  }
};

module.exports = connectDB; 