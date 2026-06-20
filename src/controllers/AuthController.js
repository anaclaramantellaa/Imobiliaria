const db = require('../../config/db');

const AuthController = {
  
    mostrarLogin: (req, res) => {
      
        if (req.session && req.session.usuario) {  //se já estiver logado, vai pro dashboard
            return res.redirect('/');
        }
        res.render('login', { 
            erro: req.session?.erro || null,
            usuario: null
        });
        req.session.erro = null;
    },

    // Processar login
    login: (req, res) => {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.render('login', { 
                erro: 'Preencha todos os campos',
                usuario: null
            });
        }

        db.query(
            'SELECT * FROM usuario WHERE email = ?',
            [email],
            (err, results) => {
                if (err) {
                    console.error('Erro ao buscar usuário:', err);
                    return res.render('login', { 
                        erro: 'Erro interno do servidor',
                        usuario: null
                    });
                }

                if (results.length === 0) {
                    return res.render('login', { 
                        erro: 'E-mail ou senha inválidos',
                        usuario: null
                    });
                }

                const usuario = results[0];

                if (senha !== usuario.senha) {
                    return res.render('login', { 
                        erro: 'E-mail ou senha inválidos',
                        usuario: null
                    });
                }

                req.session.usuario = {
                    id: usuario.id_usuario,
                    nome: usuario.nome,
                    email: usuario.email
                };

                res.redirect('/');
            }
        );
    },

    logout: (req, res) => {
        req.session.destroy((err) => {
            if (err) {
                console.error('Erro ao fazer logout:', err);
            }
            res.redirect('/login');
        });
    }
};

module.exports = AuthController;