const express = require('express');
const cors = require('cors'); // Importar cors
const usuarioRoutes = require('./routes/usuarioRoutes');
const artistaRoutes = require('./routes/artistaRoutes');
const albumRoutes = require('./routes/albumRoutes');
const cancionRoutes = require('./routes/cancionRoutes');
const comentarioRoutes = require('./routes/comentarioRoutes');
const discografiaRoutes = require('./routes/discografiaRoutes');
const authRoutes = require('./routes/authRoutes');


const app = express();
const PORT = 3000;

// Configurar CORS
app.use(cors());

app.use(express.json());
app.use('/usuario', usuarioRoutes);
app.use('/artista', artistaRoutes);
app.use('/album', albumRoutes);
app.use('/cancion', cancionRoutes);
app.use('/comentario', comentarioRoutes);
app.use('/discografia', discografiaRoutes);
app.use('/auth', authRoutes);


app.get('/', (req, res) => {
  res.send('Bienvenido al servidor de la plataforma musical');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});