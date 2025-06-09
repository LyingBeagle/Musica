const Discografia = require('../models/discografiaModel');

const discografiaController = {
  getDiscografiaByArtista: (req, res) => {
    const idArtista = req.params.idArtista;
    Discografia.getDiscografiaByArtista(idArtista, (err, results) => {
      if (err) {
        console.error('Error al obtener la discografía:', err);
        res.status(500).send('Error al obtener la discografía');
      } else {
        res.json(results);
      }
    });
  }
};

module.exports = discografiaController;