/* eslint-disable max-lines-per-function */
const productService = require('../services/product.service');

const createProduct = async (req, res, next) => {
    try {
        const newProduct = req.body;

        if (Array.isArray(newProduct)) {
            const transformedProducts = newProduct.reduce((acc, product) => {
                const { data, ...baseAttrs } = product;
                const productData = data.map((item) => ({ ...baseAttrs, ...item }));
                return acc.concat(productData);
              }, []);
            const products = await productService.createManyProducts(transformedProducts);
            return res.status(201).json({ message: 'Products created successfully', products });
        }

        if ('details' in newProduct) {
            const { name, price, details } = newProduct;
            const product = await productService.createProduct(
            { name, price, brand: details.brand, model: details.model, color: details.color },
            );
            return res.status(201).json({ message: 'Product created successfully', product });
        }

        const product = await productService.createProduct(newProduct);
        return res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
        next(error);
    }
};

const getAllProducts = async (_req, res, next) => {
    try {
        const products = await productService.getAllProducts();
        return res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};

const getProductById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await productService.getProductById(id);
        return res.status(200).json(product);
    } catch (error) {
        next(error);
    }
};

const deleteProductById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await productService.deleteProductById(id);
        return res.status(204).json(response);
    } catch (error) {
        next(error);
    }
};

const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const productData = req.body;
        const updatedProduct = await productService.updateProduct(id, productData);
        return res.status(200).json(updatedProduct);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    deleteProductById,
    updateProduct,
};