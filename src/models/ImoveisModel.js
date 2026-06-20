const db = require('../../config/db');

const ImoveisModel = {

    listar: (callback) => {
        db.query('SELECT * FROM imovel', callback);
    },

    buscaPorId: (id, callback) => {
        db.query('SELECT * FROM imovel WHERE id = ?', [id], callback);
    },

    criar: (data, callback) => {
        const sql = `
            INSERT INTO imovel (zona, endereco, tipo, valor, status)
            VALUES (?, ?, ?, ?, ?)
        `;
        db.query(sql, [data.zona, data.endereco, data.tipo, data.valor, data.status], callback);
    },

     deletar: (id, callback) => {
        db.query('DELETE FROM imovel WHERE id = ?', [id], callback);
    }
}
module.exports = ImoveisModel;