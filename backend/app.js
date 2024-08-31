const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Inicializar la aplicación Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Importar y usar las rutas
//const serviciosRoutes = require('./routes/serviciosRoutes');
//app.use('/api/servicios', serviciosRoutes);

module.exports=app;