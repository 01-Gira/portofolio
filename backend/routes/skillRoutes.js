const express = require('express');
const router = express.Router();
const skillController = require('../app/http/controllers/skillController');
const authenticateJWT = require('../app/http/middleware/authenticateJWT');

// Rute tanpa autentikasi (contoh: GET semua pengalaman kerja)
router.get('/:userId', skillController.getSkillsByUserId);

// Rute dengan autentikasi
router.post('/', authenticateJWT, skillController.createSkill);
router.put('/:id', authenticateJWT, skillController.updateSkill);
router.delete('/:id', authenticateJWT, skillController.deleteSkill);

module.exports = router;
