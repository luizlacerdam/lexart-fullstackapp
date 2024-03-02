const express = require('express');
const { productController } = require('../controllers');

const router = express.Router();

router.post('/create', productController.createProduct);
router.get('/:id', productController.getProductById);
router.delete('/:id', productController.deleteProductById);
router.patch('/:id', productController.updateProduct);
router.get('/', productController.getAllProducts);

module.exports = router;
