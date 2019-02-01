'use strict';
module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define('Region', {
    RegionName: DataTypes.STRING
  }, {});
  Region.associate = function(models) {
    // associations can be defined here
    Region.hasMany(models.Teacher)
    Region.hasMany(models.Student)
  };
  return Region;
};