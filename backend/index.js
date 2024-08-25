const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/api'); // Rute utama
const requestLogger = require('./app/http/middleware/requestLogger'); // Middleware logging request
const errorLogger = require('./app/http/middleware/errorLogger'); // Middleware logging error

require('dotenv').config();

const app = express();

// Gunakan middleware logging untuk permintaan
app.use(requestLogger);

app.use(cors());
app.use(bodyParser.json());

// Gunakan rute-rute dari file api.js
app.use('/api', routes);

// Tangani kesalahan 404 jika rute tidak ditemukan
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

// Gunakan  logging untuk kesalahan sebelum  penanganan kesalahan default
app.use(errorLogger);

// Tangani kesalahan lainnya
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
