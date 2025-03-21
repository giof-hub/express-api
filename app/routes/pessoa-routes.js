const express = require('express');
const pessoaController = require('../controller/pessoa-controller');

const router = express.Router();

router.get('/pessoa', pessoaController.listAll);
router.get('/pessoa/:id', pessoaController.getById);
router.put('/pessoa/:id', pessoaController.updateById);
router.post('/pessoa', pessoaController.save);
router.delete('/pessoa/:id', pessoaController.deleteById);

module.exports = router;