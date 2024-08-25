const express = require('express');
const router = express.Router();
const workExperienceController = require('../app/http/controllers/workExperienceController');
const authenticateJWT = require('../app/http/middleware/authenticateJWT');

// Rute tanpa autentikasi (contoh: GET semua pengalaman kerja)
router.get('/:userId', workExperienceController.getWorkExperiencesByUserId);

// Rute dengan autentikasi
router.post('/', authenticateJWT, workExperienceController.createWorkExperience);
router.put('/:id', authenticateJWT, workExperienceController.updateWorkExperience);
router.delete('/:id', authenticateJWT, workExperienceController.deleteWorkExperience);

module.exports = router;
