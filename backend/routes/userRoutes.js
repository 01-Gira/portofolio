const express = require('express');
const router = express.Router();
const userController = require('../app/http/controllers/userController');
const authenticateJWT = require('../app/http/middleware/authenticateJWT');

// Rute tanpa autentikasi 
router.get('/:id', userController.getUserById);

// Rute dengan autentikasi
router.put('/:id', authenticateJWT, userController.updateUser);
router.delete('/:id', authenticateJWT, userController.deleteUser);

module.exports = router;
