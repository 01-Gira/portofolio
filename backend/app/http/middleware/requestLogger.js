const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

// Tentukan folder 'storage' di direktori root
const logDirectory = path.join(__dirname, '..', '..', '..',  'storage', 'logs');

// Pastikan folder 'storage' ada
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory, { recursive: true });
}

// Buat aliran ke file log untuk request
const requestLogStream = fs.createWriteStream(path.join(logDirectory, 'request.log'), { flags: 'a' });

// Konfigurasi morgan untuk mencatat permintaan ke file
const requestLogger = morgan('combined', { stream: requestLogStream });

module.exports = requestLogger;