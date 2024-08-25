const express = require('express');
const router = express.Router();
const personalProjectController = require('../app/http/controllers/personalProjectController');

const authenticateJWT = require('../app/http/middleware/authenticateJWT');

// Rute tanpa autentikasi (contoh: GET semua proyek)
router.get('/', personalProjectController.getAllProjects);

// Rute dengan autentikasi
router.post('/', authenticateJWT, personalProjectController.createProject);
router.put('/:id', authenticateJWT, personalProjectController.updateProject);
router.delete('/:id', authenticateJWT, personalProjectController.deleteProject);

module.exports = router;
