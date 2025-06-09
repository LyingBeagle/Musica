const db = require('../config/db');

const Cancion = {
  getAllCanciones: (callback) => {
    const query = 'SELECT * FROM canción'; // Cambiado a minúsculas
    db.query(query, callback);
  },
  createCancion: (data, callback) => {
    const query = 'INSERT INTO canción (nombreCancion, idArtista, idAlbum, nombreAlbum, nTrack, duración, calificaciónPromedio, numeroOpiniones, fotoAlbum) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [
      data.nombreCancion,
      data.idArtista,
      data.idAlbum,
      data.nombreAlbum,
      data.nTrack,
      data.duración,
      data.calificaciónPromedio,
      data.numeroOpiniones,
      data.fotoAlbum
    ], callback);
  },
  updateCancion: (id, data, callback) => {
    const query = 'UPDATE canción SET nombreCancion = ?, idArtista = ?, idAlbum = ?, nombreAlbum = ?, nTrack = ?, duración = ?, calificaciónPromedio = ?, numeroOpiniones = ?, fotoAlbum = ? WHERE idCancion = ?';
    db.query(query, [
      data.nombreCancion,
      data.idArtista,
      data.idAlbum,
      data.nombreAlbum,
      data.nTrack,
      data.duración,
      data.calificaciónPromedio,
      data.numeroOpiniones,
      data.fotoAlbum,
      id
    ], callback);
  },
  deleteCancion: (id, callback) => {
    const query = 'DELETE FROM canción WHERE idCancion = ?'; // Cambiado a minúsculas
    db.query(query, [id], callback);
  }
};

module.exports = Cancion;