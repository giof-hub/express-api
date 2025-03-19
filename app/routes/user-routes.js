const express = require('express');
const userController = require('../controller/user-controller');

const router = express.Router();

router.get('/usuario', userController.listAll);
router.get('/usuario/:id', userController.getById);
router.put('/usuario/:id', userController.updateById);
router.post('/usuario', userController.save);
router.delete('/usuario/:id', userController.deleteById);

module.exports = router;