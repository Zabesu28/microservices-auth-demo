const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connecté');
  } catch (error) {
    console.error('Erreur MongoDB :', error);
    await new Promise(res => setTimeout(res, 3000));
  }
};

module.exports = connectDB;
