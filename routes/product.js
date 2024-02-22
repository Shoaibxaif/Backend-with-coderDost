
const express = require('express');
const router = express.Router();
const ProductController = require('../controller/product')


router
.post('/', ProductController.CreateModel)
.get('/', ProductController.getAllModels)
.get('/:id', ProductController.getModelById)
.put('/:id', ProductController.updateModel)
.patch('/:id', ProductController.updatePartialModel)
.delete('/:id', ProductController.deleteModel);

exports.router = router;