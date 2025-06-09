const express = require('express');
const router = express.Router();
const cancionController = require('../controllers/cancionController');

// Obtener todas las canciones
router.get('/', cancionController.getAllCanciones);

// Crear una nueva canción
router.post('/', cancionController.createCancion);

// Editar una canción
router.put('/:id', cancionController.updateCancion);

// Eliminar una canción
router.delete('/:id', cancionController.deleteCancion);

module.exports = router;