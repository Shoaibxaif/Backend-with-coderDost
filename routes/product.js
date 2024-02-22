
const express = require('express');
const router = express.Router();
const ProductController = require('../controller/product')


router
.post('/products', ProductController.CreateModel)
.get('/products', ProductController.getAllModels)
.get('/products/:id', ProductController.getModelById)
.put('/products/:id', ProductController.updateModel)
.patch('/products/:id', ProductController.updatePartialModel)
.delete('/products/:id', ProductController.deleteModel);

exports.router = router;