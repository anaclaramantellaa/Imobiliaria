const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/ClienteController');
const { auth } = require('../middlewares/auth');

router.use(auth);

router.get('/', ClienteController.listar);
router.get('/novo', ClienteController.mostrarFormulario); // Exibir formulário para NOVO cliente 
router.get('/:id/editar', ClienteController.mostrarFormulario); // Exibir formulário para EDITAR cliente 
router.post('/', ClienteController.cadastrar);
router.put('/:id', ClienteController.editar); // Atualizar cliente existente PUT
router.delete('/:id', ClienteController.excluir);

module.exports = router;

//GET = pega info
//POST = envia dados novos, criar algo
//PUT = atualiza algo existente
//DELETE = excluir 