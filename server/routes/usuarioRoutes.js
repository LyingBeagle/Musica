const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const authMiddleware = require('../middlewares/authMiddleware');

// Obtener todos los usuarios (solo administradores)
router.get('/', authMiddleware(['admin']), usuarioController.getAllUsuarios);

// Crear un nuevo usuario (acceso público)
router.post('/', usuarioController.createUsuario);

// Editar un usuario (solo autenticados)
router.put('/:id', authMiddleware(), usuarioController.updateUsuario);

// Eliminar un usuario (solo administradores)
router.delete('/:id', authMiddleware(['admin']), usuarioController.deleteUsuario);

module.exports = router;