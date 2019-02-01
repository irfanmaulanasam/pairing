'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    FullName: DataTypes.STRING,
    Address: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Email: DataTypes.STRING,
    Username: DataTypes.STRING,
    Password: DataTypes.STRING,
    RegionId: DataTypes.INTEGER,
    feeId: DataTypes.INTEGER,
    SubjectId:DataTypes.INTEGER,
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
    Teacher.belongsTo(models.Region)
    Teacher.belongsTo(models.Subject)
    Teacher.belongsTo(models.Fee)
  };
  
  return Teacher;
};