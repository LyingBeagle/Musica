const db = require('../config/db');

const Artista = {
  getAllArtistas: (callback) => {
    const query = 'SELECT * FROM artista'; // Cambiado a minúsculas
    db.query(query, callback);
  },
  createArtista: (data, callback) => {
    const query = 'INSERT INTO artista (nombre, apodo, banda, descripción, añosActivo, géneros, relaciones, link, seguidores) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

    db.query(
      query,
      [
        data.nombre,
        data.apodo,
        data.banda,
        data.descripción,
        data.añosActivo,
        JSON.stringify(data.géneros), // Convertir a JSON
        JSON.stringify(data.relaciones), // Convertir a JSON
        data.link,
        data.seguidores,
      ],
      callback
    );
  },
  updateArtista: (id, data, callback) => {
    const query =
      'UPDATE artista SET nombre = ?, apodo = ?, banda = ?, descripción = ?, añosActivo = ?, géneros = ?, relaciones = ?, link = ?, seguidores = ? WHERE idArtista = ?';
    db.query(
      query,
      [
        data.nombre,
        data.apodo,
        data.banda,
        data.descripción,
        data.añosActivo,
        JSON.stringify(data.géneros), // Convertir a JSON
        JSON.stringify(data.relaciones), // Convertir a JSON
        data.link,
        data.seguidores,
        id,
      ],
      callback
    );
  },
  deleteArtista: (id, callback) => {
    const query = 'DELETE FROM artista WHERE idArtista = ?'; // Cambiado a minúsculas
    db.query(query, [id], callback);
  },
};

module.exports = Artista;