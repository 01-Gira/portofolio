const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes'); // Rute autentikasi
const userRoutes = require('./userRoutes'); // Rute pengguna
const descriptionRoutes = require('./descriptionRoutes'); // Rute pengguna
const skillRoutes = require('./skillRoutes'); // Rute pengguna
const personalProjectRoutes = require('./personalProjectRoutes'); // Rute pengguna
const workExperienceRoutes = require('./workExperienceRoutes'); // Rute pengguna

// Definisikan rute-rute
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/description', descriptionRoutes);
router.use('/skills', skillRoutes);
router.use('/personal-projects', personalProjectRoutes);
router.use('/work-experiences', workExperienceRoutes);


module.exports = router;
