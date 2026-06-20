const db = require('../../config/db');
const Visita = require('../models/VisitaModel');


exports.create = (req, res) => {
    const { cliente_id, imovel_id, corretor_id, data_visita, observacoes } = req.body;

    const visita = new Visita(
        null,
        cliente_id,
        imovel_id,
        corretor_id,
        data_visita,
        'agendada',
        observacoes
    );

    db.query('INSERT INTO visitas SET ?', visita, (err) => {
        if (err) return res.status(500).json(err);
        return res.json({ message: 'Visita criada com sucesso!' });
    });
};


exports.findAll = (req, res) => {
    db.query('SELECT * FROM visitas', (err, result) => {
        if (err) return res.status(500).json(err);
        return res.json(result);
    });
};


exports.findById = (req, res) => {
    const { id } = req.params;

    db.query('SELECT * FROM visitas WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json(err);
        return res.json(result[0]);
    });
};


exports.update = (req, res) => {
    const { id } = req.params;
    const { cliente_id, imovel_id, corretor_id, data_visita, status, observacoes } = req.body;

    db.query(
        `UPDATE visitas 
         SET cliente_id=?, imovel_id=?, corretor_id=?, data_visita=?, status=?, observacoes=? 
         WHERE id=?`,
        [cliente_id, imovel_id, corretor_id, data_visita, status, observacoes, id],
        (err) => {
            if (err) return res.status(500).json(err);
            return res.json({ message: 'Visita atualizada com sucesso!' });
        }
    );
};


exports.delete = (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM visitas WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json(err);
        return res.json({ message: 'Visita deletada com sucesso!' });
    });
};