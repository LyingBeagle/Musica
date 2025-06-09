const fs = require('fs');
const path = require('path');
const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234', // Cambia esto si es necesario
  multipleStatements: true // Esto permite ejecutar múltiples consultas en una sola llamada
});

// Leer el archivo SQL
const sqlFilePath = path.join(__dirname, 'plataformamusical.sql');
const sql = fs.readFileSync(sqlFilePath, 'utf8');

// Primero, asegurarse de que la base de datos existe
const createDatabaseQuery = 'CREATE DATABASE IF NOT EXISTS plataformamusical;';

// Ejecutar la creación de la base de datos y luego ejecutar el archivo SQL
db.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }

  console.log('Conexión exitosa a la base de datos. Inicializando...');

  // Crear la base de datos si no existe
  db.query(createDatabaseQuery, (err, results) => {
    if (err) {
      console.error('Error creando la base de datos:', err);
      db.end();
      return;
    }

    console.log('Base de datos creada o ya existe.');

    // Ahora seleccionar la base de datos
    db.changeUser({ database: 'plataformamusical' }, (err) => {
      if (err) {
        console.error('Error seleccionando la base de datos:', err);
        db.end();
        return;
      }

      // Ejecutar el archivo SQL después de seleccionar la base de datos
      db.query(sql, (err, results) => {
        if (err) {
          console.error('Error ejecutando el script SQL:', err);
        } else {
          console.log('Base de datos inicializada correctamente.');
        }

        // Cerrar la conexión después de ejecutar el script
        db.end((err) => {
          if (err) {
            console.error('Error cerrando la conexión:', err);
          } else {
            console.log('Conexión cerrada.');
          }
        });
      });
    });
  });
});