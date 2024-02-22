
const express = require('express');
const router = express.Router();
const userController = require('../controller/product')


router
.post('/', userController.CreateModel)
.get('/', userController.getAllModels)
.get('/:id', userController.getModelById)
.put('/:id', userController.updateModel)
.patch('/:id', userController.updatePartialModel)
.delete('/:id', userController.deleteModel);

exports.router = router;