const usersRoutes = require('./routes/user');
const session = require('express-session');
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 80;

// Pasta com arquivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Configuração do middleware CORS
app.use(cors({
    origin: (origin, callback) => {
        callback(null, true);
    },
    methods: ['GET', 'POST'], 
    allowedHeaders: ['Content-Type'], 
    credentials: true,
}));

// Configuração da sessão
app.use(session({
    secret: 'sdbfiweufhajakjfhqpnbnfwifba',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true, 
        secure: false,
    },
}));

// Middleware para interpretar o corpo das requisições em JSON
app.use(express.json());

// Middleware de logs de sessão
app.use((req, res, next) => {
    console.log('Sessão:', req.session);
    next();
});

// Middleware de autenticação
const authMiddleware = (req, res, next) => {
    next(); // PROVISóOOOOOORIO
};
// --------- DEFINIÇÕES DE ROTAS --------- //

// Rota principal (redireciona para index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'html', 'index.html'));
});

// Rota protegida para redirecionar para home.html
app.get('/home', authMiddleware, (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'html', 'home.html'));
});

// Rotas para usuários
app.use('/users', usersRoutes);

// --------- INICIANDO O SERVIDOR --------- //
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});