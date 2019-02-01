'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fee = sequelize.define('Fee', {
    Range: DataTypes.STRING
  }, {});
  Fee.associate = function(models) {
    // associations can be defined here
    Fee.hasMany(models.Teacher)
  };
  return Fee;
};