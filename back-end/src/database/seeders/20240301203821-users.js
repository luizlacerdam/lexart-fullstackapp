/* eslint-disable camelcase */
/* eslint-disable max-lines-per-function */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        email: 'admin@email.com',
        password: 'e10adc3949ba59abbe56e057f20f883e',
      },
      {
        id: 2,
        email: 'user@email.com',
        password: 'e10adc3949ba59abbe56e057f20f883e',
      },
      {
        id: 3,
        email: 'user2@email.com',
        password: 'e10adc3949ba59abbe56e057f20f883e',
      },
    ], { underscored: true });
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
