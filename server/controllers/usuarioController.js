const Usuario = require('../models/usuarioModel');

const usuarioController = {
  getAllUsuarios: (req, res) => {
    Usuario.getAllUsuarios((err, results) => {
      if (err) {
        console.error('Error al obtener usuarios:', err);
        res.status(500).send('Error al obtener usuarios');
      } else {
        res.json(results);
      }
    });
  },
  createUsuario: (req, res) => {
    const data = req.body;
    Usuario.createUsuario(data, (err, results) => {
      if (err) {
        console.error('Error al crear usuario:', err);
        res.status(500).send('Error al crear usuario');
      } else {
        res.status(201).send('Usuario creado exitosamente');
      }
    });
  },
  updateUsuario: (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Usuario.updateUsuario(id, data, (err, results) => {
      if (err) {
        console.error('Error al actualizar usuario:', err);
        res.status(500).send('Error al actualizar usuario');
      } else {
        res.status(200).send('Usuario actualizado exitosamente');
      }
    });
  },
  deleteUsuario: (req, res) => {
    const id = req.params.id;
    Usuario.deleteUsuario(id, (err, results) => {
      if (err) {
        console.error('Error al eliminar usuario:', err);
        res.status(500).send('Error al eliminar usuario');
      } else {
        res.status(200).send('Usuario eliminado exitosamente');
      }
    });
  }
};

module.exports = usuarioController;