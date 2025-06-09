const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuarioModel');

const authController = {
  register: (req, res) => {
    console.log('Datos recibidos en el backend:', req.body); // Verificar datos

    const { nombreUsuario, rut, correo, region, comuna, contrasena, confirmarContrasena } = req.body;

    // Validar que las contraseñas coincidan
    if (contrasena !== confirmarContrasena) {
      return res.status(400).send('Las contraseñas no coinciden');
    }

    // Crear el usuario (sin enviar confirmarContraseña)
    Usuario.createUsuario(
      { nombreUsuario, rut, correo, region, comuna, contrasena },
      (err, results) => {
        if (err) {
          console.error('Error al registrar usuario:', err);
          res.status(500).send('Error al registrar usuario');
        } else {
          res.status(201).send('Usuario registrado exitosamente');
        }
      }
    );
  },
  login: (req, res) => {
    const { nombreUsuario, contraseña } = req.body;

    Usuario.getUsuarioByNombre(nombreUsuario, (err, results) => {
      if (err) {
        console.error('Error al buscar usuario:', err);
        res.status(500).send('Error al iniciar sesión');
      } else if (results.length === 0) {
        res.status(404).send('Usuario no encontrado');
      } else {
        const usuario = results[0];

        if (contraseña !== usuario.contraseña) {
          res.status(401).send('Contraseña incorrecta');
        } else {
          const token = jwt.sign(
            { idUsuario: usuario.idUsuario, isAdmin: usuario.isAdmin },
            'secret_key',
            { expiresIn: '1h' }
          );
          res.json({ token });
        }
      }
    });
  },
  validateUser: (req, res) => {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(403).send('Token no proporcionado');
    }

    jwt.verify(token.split(' ')[1], 'secret_key', (err, decoded) => {
      if (err) {
        return res.status(401).send('Token inválido');
      }

      res.json({
        idUsuario: decoded.idUsuario,
        isAdmin: decoded.isAdmin,
        mensaje: 'Usuario validado exitosamente'
      });
    });
  },
  invalidTokens: [],
  logout: (req, res) => {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(403).send('Token no proporcionado');
    }

    authController.invalidTokens.push(token.split(' ')[1]);
    res.status(200).send('Sesión cerrada exitosamente');
  },
  isTokenValid: (token) => {
    return !authController.invalidTokens.includes(token);
  },
};

module.exports = authController;