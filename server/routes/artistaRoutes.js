const express = require('express');
const router = express.Router();
const artistaController = require('../controllers/artistaController');

// Obtener todos los artistas
router.get('/', artistaController.getAllArtistas);

// Crear un nuevo artista
router.post('/', artistaController.createArtista);

// Editar un artista
router.put('/:id', artistaController.updateArtista);

// Eliminar un artista
router.delete('/:id', artistaController.deleteArtista);

module.exports = router;