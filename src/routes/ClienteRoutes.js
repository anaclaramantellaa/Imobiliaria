const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/ClienteController');

// ========== ROTAS CRUD ==========

// Listar todos os clientes (GET /cliente)
router.get('/', ClienteController.listar);

// Exibir formulário para NOVO cliente (GET /cliente/novo)
router.get('/novo', ClienteController.mostrarFormulario);

// Exibir formulário para EDITAR cliente (GET /cliente/:id/editar)
router.get('/:id/editar', ClienteController.mostrarFormulario);

// Cadastrar novo cliente (POST /cliente)
router.post('/', ClienteController.cadastrar);

// Atualizar cliente existente (PUT /cliente/:id)
router.put('/:id', ClienteController.editar);

// Excluir cliente (DELETE /cliente/:id)
router.delete('/:id', ClienteController.excluir);

module.exports = router;