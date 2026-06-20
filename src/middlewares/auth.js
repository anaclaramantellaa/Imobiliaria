const auth = (req, res, next) => {
    if (req.session && req.session.usuario) {
        return next();
    }
    req.session.erro = 'Faça login para acessar esta página';
    res.redirect('/login');
};

module.exports = { auth };