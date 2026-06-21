const ImoveisModel = require('../models/ImoveisModel');

const ImoveisController = {
    listar: (req, res) => {
        ImoveisModel.listar((err, results) => {
            if (err) {
                console.error('Erro ao listar imóveis:', err);
                return res.status(500).render('erros/500', {
                    mensagem: 'Erro ao carregar imóveis'
                });
            }
            res.render('imoveis/lista', {
                imoveis: results,
                usuario: req.session?.usuario
            });
        });
    },

    mostrarFormulario: (req, res) => {
        const id = req.params.id;

        if (id) {
            // EDIÇÃO
            ImoveisModel.buscaPorId(id, (err, results) => {
                if (err || results.length === 0) {
                    return res.status(404).send('Imóvel não encontrado');
                }
                res.render('imoveis/forms', {
                    imovel: results[0],
                    usuario: req.session?.usuario
                });
            });
        } else {
            // NOVO
            res.render('imoveis/forms', {
                imovel: null,
                usuario: req.session?.usuario
            });
        }
    },

    criar: (req, res) => {
        const { zona, endereco, tipo, valor, status } = req.body;

        if (!zona || !endereco || !tipo || !valor) {
            return res.status(400).send('Todos os campos são obrigatórios');
        }

        ImoveisModel.criar(req.body, (err) => {
            if (err) {
                console.error('Erro ao criar imóvel:', err);
                return res.status(500).send('Erro ao cadastrar imóvel');
            }
            res.redirect('/imoveis');
        });
    },

    editar: (req, res) => {
        const id = req.params.id;

        ImoveisModel.atualizar(id, req.body, (err) => {
            if (err) {
                console.error('Erro ao editar imóvel:', err);
                return res.status(500).send('Erro ao editar imóvel');
            }
            res.redirect('/imoveis');
        });
    },

    deletar: (req, res) => {
        const id = req.params.id;

        ImoveisModel.deletar(id, (err) => {
            if (err) {
                console.error('Erro ao deletar imóvel:', err);
                return res.status(500).send('Erro ao excluir imóvel');
            }
            res.redirect('/imoveis');
        });
    }
};

module.exports = ImoveisController;