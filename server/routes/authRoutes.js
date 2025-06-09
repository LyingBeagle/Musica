const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Registro de usuario
router.post('/register', authController.register);

// Inicio de sesión
router.post('/login', authController.login);

// Validar usuario
router.get('/validate', authController.validateUser);

// Cerrar sesión (opcional)
router.post('/logout', authController.logout);

module.exports = router;