const express = require('express');
const router = express.Router();

const CorretorController = require('../controllers/ImoveisController');

router.get('/imoveis', ImoveisController.listar);
router.get('/imoveis/:id', ImoveisController.buscarPorId);
router.post('/imoveis', ImoveisController.criar);
router.put('/imoveis/:id', ImoveisController.atualizar);
router.delete('/imoveis/:id', ImoveisController.deletar);

module.exports = router;