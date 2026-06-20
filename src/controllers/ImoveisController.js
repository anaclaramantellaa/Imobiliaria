const Imoveis = require('../models/ImoveisModel');

const ImoveisController = {

    listar: (req, res) => {
        Imoveis.listar((err, result) => {
            if (err) {
                return res.status(500).json({ erro: err });
            }
            res.json(result);
        });
    },

    buscarPorId: (req, res) => {
        const id = req.params.id;

        Imoveis.buscaPorId(id, (err, result) => {
            if (err) {
                return res.status(500).json({ erro: err });
            }
            res.json(result);
        });
    },

    criar: (req, res) => {
        Imoveis.criar(req.body, (err, result) => {
            if (err) {
                return res.status(500).json({ erro: err });
            }

            res.status(201).json({
                mensagem: "Imóvel criado com sucesso!",
                id: result.insertId
            });
        });
    },

    atualizar: (req, res) => {
        const id = req.params.id;

        Imoveis.atualizar(id, req.body, (err) => {
            if (err) {
                return res.status(500).json({ erro: err });
            }

            res.json({ mensagem: "Imóvel atualizado com sucesso!" });
        });
    },

    deletar: (req, res) => {
        const id = req.params.id;

        Imoveis.deletar(id, (err) => {
            if (err) {
                return res.status(500).json({ erro: err });
            }

            res.json({ mensagem: "Imóvel deletado com sucesso!" });
        });
    }
};

module.exports = ImoveisController;