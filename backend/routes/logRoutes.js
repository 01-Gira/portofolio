const express = require('express');
const router = express.Router();
const logController = require('../controllers/logController');
const authenticateJWT = require('../middleware/authenticateJWT');

// Rute dengan autentikasi
router.get('/', authenticateJWT, logController.getAllLogs);
router.post('/', authenticateJWT, logController.createLog);
router.put('/:id', authenticateJWT, logController.updateLog);
router.delete('/:id', authenticateJWT, logController.deleteLog);

module.exports = router;
