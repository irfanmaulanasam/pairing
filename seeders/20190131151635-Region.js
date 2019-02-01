'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Regions',[{
      RegionName:'JAKARTA SELATAN',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      RegionName:'JAKARTA BARAT',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      RegionName:'JAKARTA TIMUR',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      RegionName:'JAKARTA PUSAT',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      RegionName:'JAKARTA UTARA',
      createdAt: new Date(),
      updatedAt: new Date()
    }],{})
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Regions', null, {});
  }
};
