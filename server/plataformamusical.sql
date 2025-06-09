-- Crear base de datos si no existe
CREATE DATABASE IF NOT EXISTS plataformamusical;

-- Tabla: usuario
DROP TABLE IF EXISTS usuario;
CREATE TABLE usuario (
  idUsuario INT NOT NULL AUTO_INCREMENT,
  nombreUsuario VARCHAR(100) NOT NULL,
  rut VARCHAR(12) NOT NULL,
  correo VARCHAR(100) NOT NULL,
  region VARCHAR(100) DEFAULT NULL,
  comuna VARCHAR(100) DEFAULT NULL,
  contrasena VARCHAR(255) NOT NULL,
  foto BLOB,
  descripcion VARCHAR(100) DEFAULT NULL,
  fechaIngreso DATETIME DEFAULT CURRENT_TIMESTAMP,
  artistasSeguidos JSON DEFAULT NULL,
  albumesFavoritos JSON DEFAULT NULL,
  meGusta INT DEFAULT 0,
  seguidores INT DEFAULT 0,
  seguidosUsuarios JSON DEFAULT NULL,
  isAdmin TINYINT(1) DEFAULT 0,
  PRIMARY KEY (idUsuario),
  UNIQUE KEY rut (rut),
  UNIQUE KEY correo (correo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla: artista
DROP TABLE IF EXISTS artista;
CREATE TABLE artista (
  idArtista INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  apodo VARCHAR(100) DEFAULT NULL,
  banda VARCHAR(100) DEFAULT NULL,
  descripcion TEXT,
  aniosActivo VARCHAR(50) DEFAULT NULL,
  generos JSON DEFAULT NULL,
  relaciones JSON DEFAULT NULL,
  link VARCHAR(255) DEFAULT NULL,
  seguidores INT DEFAULT 0,
  PRIMARY KEY (idArtista)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla: album
DROP TABLE IF EXISTS album;
CREATE TABLE album (
  idAlbum INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  idArtista INT DEFAULT NULL,
  nombreArtista VARCHAR(100) DEFAULT NULL,
  fechaSalida DATE DEFAULT NULL,
  genero VARCHAR(50) DEFAULT NULL,
  duracionAlbum TIME DEFAULT NULL,
  fotoArtista BLOB,
  puntuacionUsuario FLOAT DEFAULT NULL,
  calificacionPromedio FLOAT DEFAULT NULL,
  tipo INT DEFAULT NULL,
  numeroCanciones INT DEFAULT NULL,
  numeroOpiniones INT DEFAULT NULL,
  link VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (idAlbum),
  KEY idArtista (idArtista),
  CONSTRAINT album_ibfk_1 FOREIGN KEY (idArtista) REFERENCES artista (idArtista)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla: cancion
DROP TABLE IF EXISTS cancion;
CREATE TABLE cancion (
  idCancion INT NOT NULL AUTO_INCREMENT,
  nombreCancion VARCHAR(100) NOT NULL,
  idArtista INT DEFAULT NULL,
  idAlbum INT DEFAULT NULL,
  nombreAlbum VARCHAR(100) DEFAULT NULL,
  nTrack INT DEFAULT NULL,
  duracion TIME DEFAULT NULL,
  calificacionPromedio FLOAT DEFAULT NULL,
  numeroOpiniones INT DEFAULT NULL,
  fotoAlbum BLOB,
  PRIMARY KEY (idCancion),
  KEY idArtista (idArtista),
  KEY idAlbum (idAlbum),
  CONSTRAINT cancion_ibfk_1 FOREIGN KEY (idArtista) REFERENCES artista (idArtista),
  CONSTRAINT cancion_ibfk_2 FOREIGN KEY (idAlbum) REFERENCES album (idAlbum)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla: comentario
DROP TABLE IF EXISTS comentario;
CREATE TABLE comentario (
  idComentario INT NOT NULL AUTO_INCREMENT,
  texto TEXT NOT NULL,
  idUsuario INT DEFAULT NULL,
  idCancion INT DEFAULT NULL,
  idAlbum INT DEFAULT NULL,
  fechaHora DATETIME DEFAULT CURRENT_TIMESTAMP,
  meGusta INT DEFAULT 0,
  noMeGusta INT DEFAULT 0,
  calificacionPuesta INT DEFAULT NULL,
  fotoPerfil BLOB,
  idComentarioPadre INT DEFAULT NULL,
  PRIMARY KEY (idComentario),
  KEY idUsuario (idUsuario),
  KEY idCancion (idCancion),
  KEY idAlbum (idAlbum),
  CONSTRAINT comentario_ibfk_1 FOREIGN KEY (idUsuario) REFERENCES usuario (idUsuario),
  CONSTRAINT comentario_ibfk_2 FOREIGN KEY (idCancion) REFERENCES cancion (idCancion),
  CONSTRAINT comentario_ibfk_3 FOREIGN KEY (idAlbum) REFERENCES album (idAlbum)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla: discografia
DROP TABLE IF EXISTS discografia;
CREATE TABLE discografia (
  idArtista INT DEFAULT NULL,
  idAlbum INT NOT NULL,
  PRIMARY KEY (idAlbum),
  KEY idArtista (idArtista),
  CONSTRAINT discografia_ibfk_1 FOREIGN KEY (idArtista) REFERENCES artista (idArtista),
  CONSTRAINT discografia_ibfk_2 FOREIGN KEY (idAlbum) REFERENCES album (idAlbum)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Insertar datos en la tabla usuario
INSERT INTO usuario (idUsuario, nombreUsuario, rut, correo, region, comuna, contrasena, isAdmin)
VALUES
(3, 'Juan Pérez', '12345678-9', 'juan.perez@example.com', NULL, NULL, 'password123', 0),
(11, 'Admin User', '99999999-9', 'admin@example.com', NULL, NULL, 'admin123', 1),
(17, 'Juanito', '22222222-9', 'juanito@example.com', 'Metropolitana', 'Santiago', 'password123', 0),
(19, 'ee', '11111111-k', 'ee@gmail.com', 'Valparaiso', 'Valparaiso', 'ee', 0);