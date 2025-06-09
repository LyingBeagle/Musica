const db = require('../config/db');

const Discografia = {
  getDiscografiaByArtista: (idArtista, callback) => {
    const query = `
      SELECT álbum.* 
      FROM álbum
      WHERE idArtista = ?
    `;
    db.query(query, [idArtista], callback);
  }
};

module.exports = Discografia;