const Cliente = require('../models/ClienteModel'); 

const ClienteController = {
    // Listar clientes
    listar: (req, res) => {
        Cliente.getAll((err, results) => {
            if (err) {
                console.error('Erro ao listar:', err);
                return res.status(500).send('Erro ao carregar clientes');
            }
            
            res.render('cliente/lista', {
                clientes: results,
                usuario: req.session?.usuario
            });
        });
    },

    // Mostrar formulário (novo + edição)
    mostrarFormulario: (req, res) => {
        const id = req.params.id;
        
        if (id) {
            // Editar
            Cliente.getById(id, (err, results) => {
                if (err || results.length === 0) {
                    return res.status(404).send('Cliente não encontrado');
                }
                
                res.render('cliente/forms', {
                    cliente: results[0],
                    usuario: req.session?.usuario
                });
            });
        } else {
           
            res.render('cliente/forms', {
                cliente: null,
                usuario: req.session?.usuario
            });
        }
    },

    // Cadastrar (POST)
    cadastrar: (req, res) => {
        const { nome, cpf, telefone, email, tipo } = req.body;

        if (!nome || !cpf || !telefone || !tipo) {
            return res.status(400).send('Todos os campos são obrigatórios');
        }

        Cliente.create(req.body, (err, result) => {
            if (err) {
                console.error('Erro ao cadastrar:', err);
                return res.status(500).send('Erro ao cadastrar cliente');
            }
            // Redireciona para a lista de clientes
            res.redirect('/cliente');
        });
    },

    // Editar (PUT)
    editar: (req, res) => {
        const id = req.params.id;
        const { nome, cpf, telefone, email, tipo } = req.body;

        // Validação básica
        if (!nome || !cpf || !telefone || !tipo) {
            return res.status(400).send('Todos os campos são obrigatórios');
        }

        Cliente.update(id, req.body, (err, result) => {
            if (err) {
                console.error('Erro ao editar:', err);
                return res.status(500).send('Erro ao editar cliente');
            }
            // Redireciona para a LISTA 
            res.redirect('/cliente');
        });
    },

    // Excluir 
    excluir: (req, res) => {
        const id = req.params.id;
        
        Cliente.delete(id, (err, result) => {
            if (err) {
                console.error('Erro ao excluir:', err);
                return res.status(500).send('Erro ao excluir cliente');
            }
            
            res.redirect('/cliente');
        });
    }
};

module.exports = ClienteController;