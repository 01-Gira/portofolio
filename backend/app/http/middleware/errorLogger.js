const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

// Tentukan folder 'storage' di direktori root
const logDirectory = path.join(__dirname, '..', '..', '..',  'storage', 'logs');

// Pastikan folder 'storage' ada
if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory, { recursive: true });
  }
  
  // Buat aliran ke file log untuk error
  const errorLogStream = fs.createWriteStream(path.join(logDirectory, 'error.log'), { flags: 'a' });
  
  // Middleware untuk menangani kesalahan
  const errorLogger = (err, req, res, next) => {
    const logMessage = `${new Date().toISOString()} - ${req.method} ${req.originalUrl} - ${err.message}\n${err.stack}\n`;
    errorLogStream.write(logMessage);
    next(err); // Lanjutkan ke middleware penanganan kesalahan default
  };
  
  module.exports = errorLogger;