'use strict';

// const userController = require("../controllers/userController");

module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize
  class Product extends Model{}
   Product.init({
    gambar: DataTypes.STRING,
    nama_barang: DataTypes.STRING,
    gender: DataTypes.STRING,
    harga_barang: DataTypes.STRING,
    user_Id: DataTypes.INTEGER
  }, {
    sequelize, modelName: "Product"
  });
  Product.associate=function(models){
    Product.hasMany(models.Cart)
  }

  
  return Product;
};