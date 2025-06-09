const db = require('../config/db');

const Album = {
  getAllAlbums: (callback) => {
    const query = 'SELECT * FROM álbum'; // Cambiado a minúsculas
    db.query(query, callback);
  },
  createAlbum: (data, callback) => {
    const query = 'INSERT INTO álbum (nombre, idArtista, nombreArtista, fechaSalida, género, duraciónAlbum, fotoArtista, puntuaciónUsuario, calificaciónPromedio, tipo, numeroCanciones, numeroOpiniones, link) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [
      data.nombre,
      data.idArtista,
      data.nombreArtista,
      data.fechaSalida,
      data.género,
      data.duraciónAlbum,
      data.fotoArtista,
      data.puntuaciónUsuario,
      data.calificaciónPromedio,
      data.tipo,
      data.numeroCanciones,
      data.numeroOpiniones,
      data.link
    ], callback);
  },
  updateAlbum: (id, data, callback) => {
    const query = 'UPDATE álbum SET nombre = ?, idArtista = ?, nombreArtista = ?, fechaSalida = ?, género = ?, duraciónAlbum = ?, fotoArtista = ?, puntuaciónUsuario = ?, calificaciónPromedio = ?, tipo = ?, numeroCanciones = ?, numeroOpiniones = ?, link = ? WHERE idAlbum = ?';
    db.query(query, [
      data.nombre,
      data.idArtista,
      data.nombreArtista,
      data.fechaSalida,
      data.género,
      data.duraciónAlbum,
      data.fotoArtista,
      data.puntuaciónUsuario,
      data.calificaciónPromedio,
      data.tipo,
      data.numeroCanciones,
      data.numeroOpiniones,
      data.link,
      id
    ], callback);
  },
  deleteAlbum: (id, callback) => {
    const query = 'DELETE FROM álbum WHERE idAlbum = ?'; // Cambiado a minúsculas
    db.query(query, [id], callback);
  }
};

module.exports = Album;