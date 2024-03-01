/* eslint-disable max-lines-per-function */
/**
* @param {import('sequelize').DataTypes} DataTypes
* @param {import('sequelize').Sequelize } Sequelize
* @returns
*/

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
  'User', 
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        email: { allowNull: false, type: DataTypes.STRING },
        password: { allowNull: false, type: DataTypes.STRING },
      },
  { 
      timestamps: false, 
      tableName: 'users',
      underscored: true,
      createdAt: false,
      updatedAt: false, 
  },
  );
  
    return User;
  };
