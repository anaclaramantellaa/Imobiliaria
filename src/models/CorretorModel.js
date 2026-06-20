const db = require('../../config/db');

const CorretorModel = {

    listar: (callback) => {
        db.query('SELECT * FROM corretores', callback);
    },

    buscarPorID: (id, callback) => {
        db.query('SELECT * FROM corretores WHERE id = ?', [id], callback);
    },

    criar: (data, callback) => {
        const sql = `
            INSERT INTO corretores (nome, email, telefone, creci)
            VALUES (?, ?, ?, ?)
        `;

        db.query(sql, [
            data.nome,
            data.email,
            data.telefone,
            data.creci
        ], callback);
    },

    deletar: (id, callback) => {
        db.query('DELETE FROM corretores WHERE id = ?', [id], callback);
    }
};

module.exports = CorretorModel;