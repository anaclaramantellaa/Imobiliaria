const db = require('../../config/db');

const Cliente = {
    getAll: (callback) => {
        db.query('SELECT * FROM cliente ORDER BY id_cliente DESC', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM cliente WHERE id_cliente = ?', [id], callback);
    },
    create: (data, callback) => {
        const { nome, cpf, telefone, email, tipo } = data;
        db.query(
            'INSERT INTO cliente (nome, cpf, telefone, email, tipo) VALUES (?, ?, ?, ?, ?)',
            [nome, cpf, telefone, email, tipo],
            callback
        );
    },
    update: (id, data, callback) => {
        const { nome, cpf, telefone, email, tipo } = data;
        db.query(
            'UPDATE cliente SET nome = ?, cpf = ?, telefone = ?, email = ?, tipo = ? WHERE id_cliente = ?',
            [nome, cpf, telefone, email, tipo, id],
            callback
        );
    },
    delete: (id, callback) => {
        db.query('DELETE FROM cliente WHERE id_cliente = ?', [id], callback);
    }
};

module.exports = Cliente;