const express = require('express');
const router = express.Router();
const comentarioController = require('../controllers/comentarioController');

// Crear un nuevo comentario o respuesta
router.post('/', comentarioController.createComentario);

// Obtener un comentario específico junto con sus respuestas (hilo)
router.get('/:id', comentarioController.getComentarioById);

// Eliminar un comentario (y opcionalmente sus respuestas)
router.delete('/:id', comentarioController.deleteComentario);

module.exports = router;