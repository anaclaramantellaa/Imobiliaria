const express = require('express');
const router = express.Router();
const conexao = require('../../config/db');

router.get('/clientes', (req, res) => {
    conexao.query('SELECT * FROM cliente', (erro, resultados) => {
        if (erro) {
            return res.status(500).json(erro);
        }

        res.json(resultados);
    });
});
router.post('/clientes', (req, res) => {
    const { nome, cpf, telefone, email } = req.body;

    const sql = `
        INSERT INTO cliente (nome, cpf, telefone, email)
        VALUES (?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [nome, cpf, telefone, email],
        (erro, resultado) => {
            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(201).json({
                mensagem: 'Cliente cadastrado com sucesso!',
                id: resultado.insertId
            });
        }
    );
});
router.post('/clientes', (req, res) => {
    const { nome, cpf, telefone, email } = req.body;

    const sql = `
        INSERT INTO cliente (nome, cpf, telefone, email)
        VALUES (?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [nome, cpf, telefone, email],
        (erro, resultado) => {
            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(201).json({
                mensagem: 'Cliente cadastrado com sucesso!',
                id: resultado.insertId
            });
        }
    );
});
router.post('/clientes', (req, res) => {
    const { nome, cpf, telefone, email } = req.body;

    const sql = `
        INSERT INTO cliente (nome, cpf, telefone, email)
        VALUES (?, ?, ?, ?)
    `;

    conexao.query(sql, [nome, cpf, telefone, email], (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(201).json({
            mensagem: 'Cliente cadastrado com sucesso!',
            id: resultado.insertId
        });
    });
});

module.exports = router;