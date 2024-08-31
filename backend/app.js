const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Inicializar la aplicación Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Importar y usar las rutas
const serviceRoutes = require('./routes/serviceRoutes');
app.use('/api/servicios', serviceRoutes);

module.exports=app;