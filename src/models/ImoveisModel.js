const db = require('../../config/db');

const ImoveisModel = {
    listar: (callback) => {
        db.query('SELECT * FROM imovel ORDER BY id_imovel DESC', callback);
    },

    buscaPorId: (id, callback) => {
        db.query('SELECT * FROM imovel WHERE id_imovel = ?', [id], callback);
    },

    criar: (data, callback) => {
        const sql = `
            INSERT INTO imovel (zona, endereco, tipo, valor, status)
            VALUES (?, ?, ?, ?, ?)
        `;
        db.query(sql, [
            data.zona,
            data.endereco,
            data.tipo,
            data.valor,
            data.status || 'disponível'
        ], callback);
    },

    atualizar: (id, data, callback) => {
        const sql = `
            UPDATE imovel 
            SET zona = ?, endereco = ?, tipo = ?, valor = ?, status = ?
            WHERE id_imovel = ?
        `;
        db.query(sql, [
            data.zona,
            data.endereco,
            data.tipo,
            data.valor,
            data.status,
            id
        ], callback);
    },

    deletar: (id, callback) => {
        db.query('DELETE FROM imovel WHERE id_imovel = ?', [id], callback);
    }
};

module.exports = ImoveisModel;