const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', authRoutes);

const PORT = process.env.AUTH_PORT || 5000;
app.listen(PORT, () => console.log(`Serveur auth lancé sur le port ${PORT}`));
