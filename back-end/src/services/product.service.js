const { product } = require('../database/models');

const createProduct = async (newProduct) => {
    const createdProduct = await product.create(newProduct);
    return createdProduct;
};

const createManyProducts = async (newProducts) => {
    const createdProducts = await product.bulkCreate(newProducts);
    return createdProducts;
};

const getAllProducts = async () => {
    const products = await product.findAll();
    return products;
};

const getProductById = async (id) => {
    const productById = await product.findByPk(id);
    return productById;
};

const deleteProductById = async (id) => {
    const deleteProduct = await product.destroy({ where: { id } });
    return deleteProduct;
};

const updateProduct = async (id, productData) => {
    const updatedProduct = await product.update(productData, { where: { id } });
    return updatedProduct;
};

module.exports = {
    createProduct,
    createManyProducts,
    getAllProducts,
    getProductById,
    deleteProductById,
    updateProduct,
};