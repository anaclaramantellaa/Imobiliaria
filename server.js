const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
require('dotenv').config();

const app = express();

// ========== CONFIGURAÇÃO DO EJS ==========
// Define a pasta onde estarão as views (agora apontando para ejs/views)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'ejs', 'views'));

// ========== MIDDLEWARES ==========
// Permite ler JSON e dados de formulários (URL encoded)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Permite usar PUT e DELETE em formulários HTML (via _method)
app.use(methodOverride('_method'));

// Serve arquivos estáticos (CSS, JS, imagens) da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// ========== CONEXÃO COM BANCO ==========
require('./config/db');

// ========== ROTAS ==========
const clienteRoutes = require('./src/routes/ClienteRoutes');
app.use('/cliente', clienteRoutes);

app.get('/', (req, res) => {
    res.send('Servidor funcionando! Acesse /cliente para testar o CRUD.');
});

// ========== INICIAR SERVIDOR ==========
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}/cliente`);
});