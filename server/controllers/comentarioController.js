const Comentario = require('../models/comentarioModel');

const comentarioController = {
  createComentario: (req, res) => {
    const data = req.body;
    Comentario.createComentario(data, (err, results) => {
      if (err) {
        console.error('Error al crear comentario:', err);
        res.status(500).send('Error al crear comentario');
      } else {
        res.status(201).send('Comentario creado exitosamente');
      }
    });
  },
  getComentarioById: (req, res) => {
    const id = req.params.id;
    Comentario.getComentarioById(id, (err, results) => {
      if (err) {
        console.error('Error al obtener comentario:', err);
        res.status(500).send('Error al obtener comentario');
      } else {
        res.json(results);
      }
    });
  },
  deleteComentario: (req, res) => {
    const id = req.params.id;
    Comentario.deleteComentario(id, (err, results) => {
      if (err) {
        console.error('Error al eliminar comentario:', err);
        res.status(500).send('Error al eliminar comentario');
      } else {
        res.status(200).send('Comentario eliminado exitosamente');
      }
    });
  }
};

module.exports = comentarioController;