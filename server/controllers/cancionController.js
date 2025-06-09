const Cancion = require('../models/cancionModel');

const cancionController = {
  getAllCanciones: (req, res) => {
    Cancion.getAllCanciones((err, results) => {
      if (err) {
        console.error('Error al obtener canciones:', err);
        res.status(500).send('Error al obtener canciones');
      } else {
        res.json(results);
      }
    });
  },
  createCancion: (req, res) => {
    const data = req.body;
    Cancion.createCancion(data, (err, results) => {
      if (err) {
        console.error('Error al crear canción:', err);
        res.status(500).send('Error al crear canción');
      } else {
        res.status(201).send('Canción creada exitosamente');
      }
    });
  },
  updateCancion: (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Cancion.updateCancion(id, data, (err, results) => {
      if (err) {
        console.error('Error al actualizar canción:', err);
        res.status(500).send('Error al actualizar canción');
      } else {
        res.status(200).send('Canción actualizada exitosamente');
      }
    });
  },
  deleteCancion: (req, res) => {
    const id = req.params.id;
    Cancion.deleteCancion(id, (err, results) => {
      if (err) {
        console.error('Error al eliminar canción:', err);
        res.status(500).send('Error al eliminar canción');
      } else {
        res.status(200).send('Canción eliminada exitosamente');
      }
    });
  }
};

module.exports = cancionController;