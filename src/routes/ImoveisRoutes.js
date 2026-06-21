const express = require('express');
const router = express.Router();
const ImoveisController = require('../controllers/ImoveisController');
const { auth } = require('../middlewares/auth');

router.use(auth);

router.get('/', ImoveisController.listar);
router.get('/novo', ImoveisController.mostrarFormulario);
router.get('/:id/editar', ImoveisController.mostrarFormulario);
router.post('/', ImoveisController.criar);
router.put('/:id', ImoveisController.editar);
router.delete('/:id', ImoveisController.deletar);

module.exports = router;