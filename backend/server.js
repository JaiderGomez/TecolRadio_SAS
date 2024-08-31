// Importar dependencias y módulos
const app = require('./app'); // Importa la aplicación Express desde app.js
const connectDB = require('./config/db'); // Importa la función de conexión a la base de datos desde db.js
require('dotenv').config(); // Cargar variables de entorno

// Configurar el puerto del servidor
const PORT = process.env.PORT || 5000;

// Conectar a la base de datos
connectDB();

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
