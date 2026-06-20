const express = require('express');
const router = express.Router();
const VisitaController = require('../controllers/VisitaController');

router.post('/visitas', VisitaController.create);
router.get('/visitas', VisitaController.findAll);
router.get('/visitas/:id', VisitaController.findById);
router.put('/visitas/:id', VisitaController.update);
router.delete('/visitas/:id', VisitaController.delete);

module.exports = router;