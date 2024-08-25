const express = require('express');
const router = express.Router();
const personalProjectController = require('../app/http/controllers/personalProjectController');

const authenticateJWT = require('../app/http/middleware/authenticateJWT');

// Rute tanpa autentikasi (contoh: GET semua proyek)
router.get('/:userId', personalProjectController.getPersonalProjectsByUserId);

// Rute dengan autentikasi
router.post('/', authenticateJWT, personalProjectController.createPersonalProject);
router.put('/:id', authenticateJWT, personalProjectController.updatePersonalProject);
router.delete('/:id', authenticateJWT, personalProjectController.deletePersonalProject);

module.exports = router;
