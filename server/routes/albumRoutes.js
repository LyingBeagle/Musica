const express = require('express');
const router = express.Router();
const albumController = require('../controllers/albumController');

// Obtener todos los álbumes
router.get('/', albumController.getAllAlbums);

// Crear un nuevo álbum
router.post('/', albumController.createAlbum);

// Editar un álbum
router.put('/:id', albumController.updateAlbum);

// Eliminar un álbum
router.delete('/:id', albumController.deleteAlbum);

module.exports = router;