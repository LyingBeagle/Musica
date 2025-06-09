const Artista = require('../models/artistaModel');

const artistaController = {
  getAllArtistas: (req, res) => {
    Artista.getAllArtistas((err, results) => {
      if (err) {
        console.error('Error al obtener artistas:', err);
        res.status(500).send('Error al obtener artistas');
      } else {
        res.json(results);
      }
    });
  },
  createArtista: (req, res) => {
    const data = req.body;
    Artista.createArtista(data, (err, results) => {
      if (err) {
        console.error('Error al crear artista:', err);
        res.status(500).send('Error al crear artista');
      } else {
        res.status(201).send('Artista creado exitosamente');
      }
    });
  },
  updateArtista: (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Artista.updateArtista(id, data, (err, results) => {
      if (err) {
        console.error('Error al actualizar artista:', err);
        res.status(500).send('Error al actualizar artista');
      } else {
        res.status(200).send('Artista actualizado exitosamente');
      }
    });
  },
  deleteArtista: (req, res) => {
    const id = req.params.id;
    Artista.deleteArtista(id, (err, results) => {
      if (err) {
        console.error('Error al eliminar artista:', err);
        res.status(500).send('Error al eliminar artista');
      } else {
        res.status(200).send('Artista eliminado exitosamente');
      }
    });
  }
};

module.exports = artistaController;