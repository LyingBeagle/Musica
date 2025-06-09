const Album = require('../models/albumModel');

const albumController = {
  getAllAlbums: (req, res) => {
    Album.getAllAlbums((err, results) => {
      if (err) {
        console.error('Error al obtener álbumes:', err);
        res.status(500).send('Error al obtener álbumes');
      } else {
        res.json(results);
      }
    });
  },
  createAlbum: (req, res) => {
    const data = req.body;
    Album.createAlbum(data, (err, results) => {
      if (err) {
        console.error('Error al crear álbum:', err);
        res.status(500).send('Error al crear álbum');
      } else {
        res.status(201).send('Álbum creado exitosamente');
      }
    });
  },
  updateAlbum: (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Album.updateAlbum(id, data, (err, results) => {
      if (err) {
        console.error('Error al actualizar álbum:', err);
        res.status(500).send('Error al actualizar álbum');
      } else {
        res.status(200).send('Álbum actualizado exitosamente');
      }
    });
  },
  deleteAlbum: (req, res) => {
    const id = req.params.id;
    Album.deleteAlbum(id, (err, results) => {
      if (err) {
        console.error('Error al eliminar álbum:', err);
        res.status(500).send('Error al eliminar álbum');
      } else {
        res.status(200).send('Álbum eliminado exitosamente');
      }
    });
  }
};

module.exports = albumController;