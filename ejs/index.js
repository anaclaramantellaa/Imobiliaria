let imovelId = 1;
let clienteId = 1;
let visitaId = 1;

const imoveis = [
  { id: imovelId++, zona: 'Sul',   endereco: 'Rua Paraguai, 42', tipo: 'Apartamento', valor: 650, status: 'Disponível' },
  { id: imovelId++, zona: 'Leste', endereco: 'Rua Uruguai, 43', tipo: 'Casa',        valor: 700, status: 'Alugado' },
  { id: imovelId++, zona: 'Oeste', endereco: 'Rua Argentina, 44', tipo: 'Apartamento', valor: 750, status: 'Disponível' },
  { id: imovelId++, zona: 'Leste', endereco: 'Rua Bolívia, 45', tipo: 'Casa',        valor: 800, status: 'Disponível' },
  { id: imovelId++, zona: 'Norte', endereco: 'Rua Chile, 46', tipo: 'Casa',        valor: 850, status: 'Alugado' },
];

const clientes = [
  { id: clienteId++, nome: 'Ana Clara', cpf: '123.456.789-00', email: 'anaclara@email.com', telefone: '(43)3432-2434', tipo: 'Comprador' },
  { id: clienteId++, nome: 'Ana Julia da Silva', cpf: '567.345.234-32', email: 'anajulia@email.com', telefone: '(43)4322-2342', tipo: 'Locatário' },
  { id: clienteId++, nome: 'Ana Julia dos Santos Prado', cpf: '123.432.543.-32', email: 'anaprado@email.com', telefone: '(43)4322-5678', tipo: 'Comprador' },
  { id: clienteId++, nome: 'Isadora Guilherme dos Santos', cpf: '765.423.543-43', email: 'isadora@email.com', telefone: '(43)1234-5644', tipo: 'Locatário' },
  { id: clienteId++, nome: 'Maria Antonieta da Silva', cpf: '234.543.654-32', email: 'antonieta@email.com', telefone: '(43)4322-4345', tipo: 'Comprador' },
];

const visitas = [
  { id: visitaId++, data: '2026-05-22', horario: '10:00', clienteId: 1, imovelId: 1, observacao: 'Levar a chave reserva',        status: 'Agendada' },
  { id: visitaId++, data: '2026-05-23', horario: '14:00', clienteId: 1, imovelId: 1, observacao: 'Cliente já antes das 14h',     status: 'Agendada' },
  { id: visitaId++, data: '2026-05-30', horario: '16:00', clienteId: 1, imovelId: 1, observacao: 'Levar a chave reserva',        status: 'Agendada' },
  { id: visitaId++, data: '2026-06-02', horario: '11:30', clienteId: 1, imovelId: 1, observacao: 'Cliente grosseiro',            status: 'Agendada' },
  { id: visitaId++, data: '2026-06-02', horario: '11:30', clienteId: 1, imovelId: 1, observacao: 'Levar a chave reserva',        status: 'Agendada' },
];

const usuarios = [
  { email: 'admin@email.com', senha: '123456', nome: 'Ana' },
];

module.exports = {
  imoveis,
  clientes,
  visitas,
  usuarios,
  nextImovelId: () => imovelId++,
  nextClienteId: () => clienteId++,
  nextVisitaId: () => visitaId++,
};
