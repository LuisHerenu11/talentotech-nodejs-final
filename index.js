// index.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';
import productsRoutes from './routes/products.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globales
app.use(cors()); // Habilita peticiones de origen cruzado
app.use(bodyParser.json());


app.use('/auth', authRoutes);
app.use('/api/products', productsRoutes);

// Middleware para rutas no definidas (Error 404)
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

// Inicio del servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});