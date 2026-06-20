const db = require('../../config/db');

const DashboardController = {
    index: (req, res) => {
        // Buscar total de clientes
        db.query('SELECT COUNT(*) AS total FROM cliente', (err, clientesResult) => {
            if (err) {
                console.error('Erro ao contar clientes:', err);
                return res.status(500).send('Erro ao carregar dashboard');
            }

            // Buscar total de imóveis
            db.query('SELECT COUNT(*) AS total FROM imovel', (err, imoveisResult) => {
                if (err) {
                    console.error('Erro ao contar imóveis:', err);
                    return res.status(500).send('Erro ao carregar dashboard');
                }

                // Buscar total de visitas
                db.query('SELECT COUNT(*) AS total FROM visita', (err, visitasResult) => {
                    if (err) {
                        console.error('Erro ao contar visitas:', err);
                        return res.status(500).send('Erro ao carregar dashboard');
                    }

                    // Buscar próximas visitas (com dados do cliente e imóvel)
                    db.query(`
                        SELECT v.*, 
                               c.nome AS cliente_nome, 
                               i.endereco AS imovel_endereco
                        FROM visita v
                        LEFT JOIN cliente c ON v.id_cliente = c.id_cliente
                        LEFT JOIN imovel i ON v.id_imovel = i.id_imovel
                        WHERE v.data_visita >= CURDATE()
                        ORDER BY v.data_visita ASC, v.horario ASC
                        LIMIT 10
                    `, (err, visitas) => {
                        if (err) {
                            console.error('Erro ao buscar visitas:', err);
                            return res.status(500).send('Erro ao carregar dashboard');
                        }

                        // Formatar dados para a view
                        const totalClientes = clientesResult[0]?.total || 0;
                        const totalImoveis = imoveisResult[0]?.total || 0;
                        const totalVisitas = visitasResult[0]?.total || 0;

                        // Formatar as visitas para a view
                        const proximasVisitas = visitas.map(v => ({
                            data: v.data_visita,
                            horario: v.horario ? v.horario.substring(0, 5) : '--:--',
                            cliente: v.cliente_nome ? { nome: v.cliente_nome } : null,
                            imovel: v.imovel_endereco ? { endereco: v.imovel_endereco } : null,
                            status: v.status || 'Agendada'
                        }));

                        res.render('dashboard', {
                            totalClientes,
                            totalImoveis,
                            totalVisitas,
                            proximasVisitas,
                            usuario: req.session?.usuario,
                            formatarData: (data) => {
                                if (!data) return '--/--/----';
                                const d = new Date(data);
                                return d.toLocaleDateString('pt-BR');
                            }
                        });
                    });
                });
            });
        });
    }
};

module.exports = DashboardController;