const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
require('dotenv').config();

const app = express();

// Configuração das views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'ejs', 'views'));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// Sessão
app.use(session({
    secret: process.env.SESSION_SECRET || 'aliadas-da-tesoura-secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false // true apenas em HTTPS
    }
}));

// Conpexão com o banco
require('./config/db');

// Middleware de autenticação
const { auth } = require('./src/middlewares/auth');

// Rotas
const authRoutes = require('./src/routes/authRoutes');
const clienteRoutes = require('./src/routes/ClienteRoutes');
const corretorRoutes = require('./src/routes/CorretorRoutes');
const visitaRoutes = require('./src/routes/VisitaRoutes');

app.use('/', authRoutes);
app.use('/cliente', auth, clienteRoutes);
app.use('/corretores', auth, corretorRoutes);
app.use('/visitas', auth, visitaRoutes);

// Dashboard
const DashboardController = require('./src/controllers/DashboardController');
app.get('/', auth, DashboardController.index);

// Inicialização do servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}`);
});