const express = require('express');
const router = express.Router();

const CorretorController = require('../controllers/CorretorController');

router.get('/corretores', CorretorController.listar);
router.get('/corretores/:id', CorretorController.buscarPorId);
router.post('/corretores', CorretorController.criar);
router.put('/corretores/:id', CorretorController.atualizar);
router.delete('/corretores/:id', CorretorController.deletar);

module.exports = router;