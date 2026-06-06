const express = require('express');
require('dotenv').config();

const app = express();

require('./config/db');

const clienteRoutes = require('./routes/ClienteRoutes');
app.use(clienteRoutes);

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor funcionando!');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});