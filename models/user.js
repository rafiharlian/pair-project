'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class User extends Model {}
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  },{
    sequelize, modelName: 'User'
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};