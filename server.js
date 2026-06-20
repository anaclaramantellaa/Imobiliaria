const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const sessao = require('express-session');
require('dotenv').config();

const app = express();

// Define a pasta onde estarão as views 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'ejs', 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public'))); 

app.use(sessao({
    secret: 'aliadas-da-tesoura-secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // true apenas em HTTPS
}));

require('./config/db'); //conexão com o banco de dados

const authRoutes = require('./src/routes/authRoutes');
const { auth } = require('./src/middlewares/auth'); 

app.use('/', authRoutes);

const clienteRoutes = require('./src/routes/ClienteRoutes');
app.use('/cliente', auth, clienteRoutes);

const DashboardController = require('./src/controllers/DashboardController');
app.get('/', auth, DashboardController.index);

const PORT = 3000; //iniciando server
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}/cliente`);
});