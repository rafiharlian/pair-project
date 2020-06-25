'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Cart extends Model {}
  Cart.init({
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    jumlah_barang: DataTypes.INTEGER
  }, {
    sequelize, modelName: 'Cart'
  });
  Cart.associate = function(models) {
    // associations can be defined here
    Cart.belongsTo(models.Product)
    Cart.belongsTo(models.User)
  };
  return Cart;
};