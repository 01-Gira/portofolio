const express = require('express');
const router = express.Router();
const authController = require('../app/http/controllers/authController'); // Controller autentikasi
const { validateLogin } = require('../app/http/middleware/validation'); // Middleware validasi

// Rute registrasi dengan validasi
// router.post('/register', validateRegistration, authController.registerUser);

// Rute login dengan validasi
router.post('/login', validateLogin, authController.loginUser);
router.post('/register', authController.registerUser);

module.exports = router;
