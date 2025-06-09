const db = require('../config/db');

const Comentario = {
  createComentario: (data, callback) => {
    const query = 'INSERT INTO comentario (texto, idUsuario, idCancion, idAlbum, idComentarioPadre, fechaHora, meGusta, noMeGusta, calificacionPuesta, fotoPerfil) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [
      data.texto,
      data.idUsuario,
      data.idCancion || null, // Si no aplica, será NULL
      data.idAlbum || null,   // Si no aplica, será NULL
      data.idComentarioPadre || null, // Si es un comentario inicial, será NULL
      new Date(),
      data.meGusta || 0,
      data.noMeGusta || 0,
      data.calificacionPuesta || null,
      data.fotoPerfil || null
    ], callback);
  },
  getComentarioById: (id, callback) => {
    const query = `
      SELECT * FROM comentario WHERE idComentario = ? OR idComentarioPadre = ?
    `;
    db.query(query, [id, id], callback);
  },
  deleteComentario: (id, callback) => {
    const query = 'DELETE FROM comentario WHERE idComentario = ? OR idComentarioPadre = ?';
    db.query(query, [id, id], callback);
  }
};

module.exports = Comentario;