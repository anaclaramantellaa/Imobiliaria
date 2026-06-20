const Corretor = require('../models/CorretorModel');

const CorretorController = {

    listar: (req, res) => {
        Corretor.listar((err, result) => {
            if (err) {
                return res.status(500).json({ erro: err });
            }
            res.json(result);
        });
    },

    buscarPorId: (req, res) => {
        const id = req.params.id;

        Corretor.buscarPorId(id, (err, result) => {
            if (err) {
                return res.status(500).json({ erro: err });
            }
            res.json(result);
        });
    },

    criar: (req, res) => {
        Corretor.criar(req.body, (err, result) => {
            if (err) {
                return res.status(500).json({ erro: err });
            }

            res.status(201).json({
                mensagem: "Corretor criado com sucesso!",
                id: result.insertId
            });
        });
    },

    atualizar: (req, res) => {
        const id = req.params.id;

        Corretor.atualizar(id, req.body, (err) => {
            if (err) {
                return res.status(500).json({ erro: err });
            }

            res.json({ mensagem: "Corretor atualizado com sucesso!" });
        });
    },

    deletar: (req, res) => {
        const id = req.params.id;

        Corretor.deletar(id, (err) => {
            if (err) {
                return res.status(500).json({ erro: err });
            }

            res.json({ mensagem: "Corretor deletado com sucesso!" });
        });
    }
};

module.exports = CorretorController;