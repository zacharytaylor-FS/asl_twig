'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Products.hasMany(models.Variant)
    }
  }
  Products.init({
    title: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.TEXT('long'),
    slug: DataTypes.STRING,
    is_published: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};