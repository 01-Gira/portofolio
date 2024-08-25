const express = require('express');
const router = express.Router();
const descriptionController = require('../app/http/controllers/descriptionController');
const authenticateJWT = require('../app/http/middleware/authenticateJWT');

// Rute tanpa autentikasi (contoh: GET semua deskripsi)

router.get('/:userId', descriptionController.getDescriptionByUserId);

// Rute dengan autentikasi
router.post('/', authenticateJWT, descriptionController.createDescription);
router.put('/:id', authenticateJWT, descriptionController.updateDescription);
router.delete('/:id', authenticateJWT, descriptionController.deleteDescription);

module.exports = router;
