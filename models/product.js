'use strict';
module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize
  class Product extends Model{}
   Product.init({
    gambar: DataTypes.STRING,
    nama_barang: DataTypes.STRING,
    gender: DataTypes.STRING,
    harga_barang: DataTypes.STRING
  }, {
    sequelize
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};