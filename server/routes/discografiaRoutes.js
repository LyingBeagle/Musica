const express = require('express');
const router = express.Router();
const discografiaController = require('../controllers/discografiaController');

// Obtener la discografía de un artista (álbumes relacionados)
router.get('/:idArtista', discografiaController.getDiscografiaByArtista);

module.exports = router;