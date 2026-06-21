const db = require('../../config/db');

const VisitaController = {

    listar: (req, res) => {
        const sql = `
            SELECT v.*, 
                   c.nome AS cliente_nome, 
                   i.endereco AS imovel_endereco
            FROM visita v
            LEFT JOIN cliente c ON v.id_cliente = c.id_cliente
            LEFT JOIN imovel i ON v.id_imovel = i.id_imovel
            ORDER BY v.data_visita DESC
        `;
        
        db.query(sql, (err, results) => {
            if (err) {
                console.error('Erro ao listar visitas:', err);
                return res.status(500).render('erros/500', { 
                    mensagem: 'Erro ao carregar visitas' 
                });
            }
            res.render('visitas/lista', {
                visitas: results,
                usuario: req.session?.usuario,
                formatarData: (data) => {  
                    if (!data) return '--/--/----';
                    const d = new Date(data);
                    return d.toLocaleDateString('pt-BR');
                }
            });
        });
    },

    mostrarFormulario: (req, res) => {
        const id = req.params.id;
        
        db.query('SELECT id_cliente, nome FROM cliente ORDER BY nome', (err, clientes) => { // buscar clientes e imóveis 
            if (err) {
                console.error('Erro ao buscar clientes:', err);
                return res.status(500).send('Erro ao carregar formulário');
            }
            
            db.query('SELECT id_imovel, endereco FROM imovel ORDER BY endereco', (err, imoveis) => {
                if (err) {
                    console.error('Erro ao buscar imóveis:', err);
                    return res.status(500).send('Erro ao carregar formulário');
                }
                
                if (id) {
                    db.query('SELECT * FROM visita WHERE id_visita = ?', [id], (err, results) => {
                        if (err || results.length === 0) {
                            return res.status(404).send('Visita não encontrada');
                        }
                        res.render('visitas/forms', {
                            visita: results[0],
                            clientes: clientes,
                            imoveis: imoveis,
                            usuario: req.session?.usuario
                        });
                    });
                } else {
                    res.render('visitas/forms', {
                        visita: null,
                        clientes: clientes,
                        imoveis: imoveis,
                        usuario: req.session?.usuario
                    });
                }
            });
        });
    },

    cadastrar: (req, res) => {
        const { id_cliente, id_imovel, data_visita, horario, observacao, status } = req.body;
        
        const sql = `
            INSERT INTO visita (id_cliente, id_imovel, data_visita, horario, observacao, status)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        
        db.query(sql, [id_cliente, id_imovel, data_visita, horario, observacao, status || 'agendada'], (err) => {
            if (err) {
                console.error('Erro ao cadastrar visita:', err);
                return res.status(500).send('Erro ao cadastrar visita');
            }
            res.redirect('/visitas');
        });
    },

    editar: (req, res) => {
        const { id } = req.params;
        const { id_cliente, id_imovel, data_visita, horario, observacao, status } = req.body;
        
        const sql = `
            UPDATE visita 
            SET id_cliente = ?, id_imovel = ?, data_visita = ?, horario = ?, observacao = ?, status = ?
            WHERE id_visita = ?
        `;
        
        db.query(sql, [id_cliente, id_imovel, data_visita, horario, observacao, status, id], (err) => {
            if (err) {
                console.error('Erro ao editar visita:', err);
                return res.status(500).send('Erro ao editar visita');
            }
            res.redirect('/visitas');
        });
    },

    excluir: (req, res) => {
        const { id } = req.params;
        
        db.query('DELETE FROM visita WHERE id_visita = ?', [id], (err) => {
            if (err) {
                console.error('Erro ao excluir visita:', err);
                return res.status(500).send('Erro ao excluir visita');
            }
            res.redirect('/visitas');
        });
    }
};

module.exports = VisitaController;