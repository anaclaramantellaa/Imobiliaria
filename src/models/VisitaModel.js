class Visita {
    constructor(id, cliente_id, imovel_id, corretor_id, data_visita, status, observacoes) {
        this.id = id;
        this.cliente_id = cliente_id;
        this.imovel_id = imovel_id;
        this.corretor_id = corretor_id;
        this.data_visita = data_visita;
        this.status = status;
        this.observacoes = observacoes;
    }
}

module.exports = Visita;