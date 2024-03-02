const { user } = require('../database/models');

const createUser = async (userData) => {
  const newUser = await user.create(userData);
  return newUser;
};

const getUserByEmail = async (email) => {
    const userByEmail = await user.findOne({ where: { email } });
    return userByEmail;
};

module.exports = {
  createUser,
  getUserByEmail,
};
