/* eslint-disable max-lines-per-function */
/**
* @param {import('sequelize').DataTypes} DataTypes
* @param {import('sequelize').Sequelize } Sequelize
* @returns
*/

module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
  'product', 
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { allowNull: false, type: DataTypes.STRING },
        brand: { allowNull: false, type: DataTypes.STRING },
        model: { allowNull: false, type: DataTypes.STRING },
        price: { allowNull: false, type: DataTypes.DECIMAL },
        color: { allowNull: false, type: DataTypes.STRING },
      },
  { 
      timestamps: false, 
      tableName: 'products',
      underscored: true,
      createdAt: false,
      updatedAt: false, 
  },
  );
  
    return product;
  };
