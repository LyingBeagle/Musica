const db = require('../config/db');

const Usuario = {
  getAllUsuarios: (callback) => {
    const query = 'SELECT * FROM usuario'; // Cambiado a minúsculas
    db.query(query, callback);
  },
  createUsuario: (data, callback) => {
    const query = `
      INSERT INTO usuario (nombreUsuario, rut, correo, región, comuna, contrasena, isAdmin)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(
      query,
      [data.nombreUsuario, data.rut, data.correo, data.region, data.comuna, data.contrasena, data.isAdmin || false],
      callback
    );
  },
  updateUsuario: (id, data, callback) => {
    const query = 'UPDATE usuario SET nombreUsuario = ?, región = ?, comuna = ?, contraseña = ?, foto = ?, descripción = ?, artistasSeguidos = ?, álbumesFavoritos = ?, meGusta = ?, seguidores = ?, seguidosUsuarios = ?, isAdmin = ? WHERE idUsuario = ?';
    db.query(query, [
      data.nombreUsuario,
      data.región,
      data.comuna,
      data.contraseña,
      data.foto,
      data.descripción,
      JSON.stringify(data.artistasSeguidos), // Convertir a JSON
      JSON.stringify(data.álbumesFavoritos), // Convertir a JSON
      data.meGusta,
      data.seguidores,
      JSON.stringify(data.seguidosUsuarios), // Convertir a JSON
      data.isAdmin,
      id
    ], callback);
  },
  deleteUsuario: (id, callback) => {
    const query = 'DELETE FROM usuario WHERE idUsuario = ?'; // Cambiado a minúsculas
    db.query(query, [id], callback);
  },
  getUsuarioByCorreo: (correo, callback) => {
    const query = 'SELECT * FROM usuario WHERE correo = ?';
    db.query(query, [correo], callback);
  },
  getUsuarioByNombre: (nombreUsuario, callback) => {
    const query = 'SELECT * FROM usuario WHERE nombreUsuario = ?';
    db.query(query, [nombreUsuario], callback);
  },
};

module.exports = Usuario;