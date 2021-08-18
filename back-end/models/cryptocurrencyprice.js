'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cryptocurrencyPrice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  cryptocurrencyPrice.init({
    price: DataTypes.FLOAT,
    cryptocurrency: DataTypes.STRING,
    interval: DataTypes.INTEGER,
    date: DataTypes.DATE,
    currency: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cryptocurrencyPrice',
  });
  return cryptocurrencyPrice;
};