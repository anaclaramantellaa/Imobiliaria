const express = require('express');
const router = express.Router();
const VisitaController = require('../controllers/VisitaController');
const { auth } = require('../middlewares/auth'); 

router.use(auth);

router.get('/', VisitaController.listar);
router.get('/novo', VisitaController.mostrarFormulario);
router.get('/:id/editar', VisitaController.mostrarFormulario);
router.post('/', VisitaController.cadastrar);
router.post('/:id', VisitaController.editar); 
router.post('/:id/excluir', VisitaController.excluir);

module.exports = router;