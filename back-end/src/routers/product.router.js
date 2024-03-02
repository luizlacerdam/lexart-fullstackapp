const express = require('express');
const { productController } = require('../controllers');
const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();

router.post('/create', validateToken, productController.createProduct);
router.get('/:id', validateToken, productController.getProductById);
router.delete('/:id', validateToken, productController.deleteProductById);
router.patch('/:id', validateToken, productController.updateProduct);
router.get('/', validateToken, productController.getAllProducts);

module.exports = router;
