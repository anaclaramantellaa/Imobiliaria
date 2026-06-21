const db = require('../../config/db');

const VisitaModel = {
    listar: (callback) => {
        const sql = `
            SELECT v.*, c.nome as cliente_nome, i.endereco as imovel_endereco
            FROM visita v
            JOIN cliente c ON v.id_cliente = c.id_cliente
            JOIN imovel i ON v.id_imovel = i.id_imovel
        `;
        db.query(sql, callback);
    },
    buscarPorId: (id, callback) => {
        const sql = `
            SELECT v.*, c.nome as cliente_nome, i.endereco as imovel_endereco
            FROM visita v
            JOIN cliente c ON v.id_cliente = c.id_cliente
            JOIN imovel i ON v.id_imovel = i.id_imovel
            WHERE v.id_visita = ?
        `;
        db.query(sql, [id], callback);
    },
    criar: (data, callback) => {
        const sql = `INSERT INTO visita (id_cliente, id_imovel, data_visita, horario, observacao, status) VALUES (?, ?, ?, ?, ?, ?)`;
        db.query(sql, [data.id_cliente, data.id_imovel, data.data_visita, data.horario, data.observacao, data.status || 'agendada'], callback);
    },
    atualizar: (id, data, callback) => {
        const sql = `UPDATE visita SET id_cliente = ?, id_imovel = ?, data_visita = ?, horario = ?, observacao = ?, status = ? WHERE id_visita = ?`;
        db.query(sql, [data.id_cliente, data.id_imovel, data.data_visita, data.horario, data.observacao, data.status, id], callback);
    },
    deletar: (id, callback) => {
        db.query('DELETE FROM visita WHERE id_visita = ?', [id], callback);
    }
};

module.exports = VisitaModel;