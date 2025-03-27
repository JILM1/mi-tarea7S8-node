const express = require('express');
const mongoose = require('mongoose');
const app = express();
const personasRoutes = require('./routes/personas');
const path = require('path');

mongoose.connect('mongodb://localhost:27017/miapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado'));

app.use(express.json());
app.use('/api/personas', personasRoutes);
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
