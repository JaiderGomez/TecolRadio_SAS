const mongoose = require('mongoose');
require('dotenv').config(); // Asegúrate de que dotenv esté configurado para acceder a las variables de entorno

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Base de datos conectada');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Salir del proceso si no se puede conectar
  }
};

module.exports = connectDB;
