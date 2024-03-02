/* eslint-disable camelcase */
/* eslint-disable max-lines-per-function */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('products', [
      {
        id: 1,
        name: 'iPhone 13',
        brand: 'Apple',
        model: '13',
        price: 7999.99,
        color: 'Blue',
      },
      {
        id: 2,
        name: 'Galaxy S21',
        brand: 'Samsung',
        model: 'S21',
        price: 4999.99,
        color: 'Black',
      },
      {
        id: 3,
        name: 'Moto G100',
        brand: 'Motorola',
        model: 'G100',
        price: 2999.99,
        color: 'White',
      },
      {
        id: 4,
        name: 'Mi 11',
        brand: 'Xiaomi',
        model: '11',
        price: 3999.99,
        color: 'Black',
      },
      {
        id: 5,
        name: 'Zenfone 8',
        brand: 'Asus',
        model: '8',
        price: 2999.99,
        color: 'White',
      },
      
    ], { underscored: true });
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('products', null, {});
  },
};
