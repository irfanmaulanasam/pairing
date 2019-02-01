'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Fees',[{
      Range:'0 - 50000',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Range:'51000 - 100000',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Range:'101000 - 150000',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Range:'151000 - 200000',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Range:'201000 - 250000',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Range:'251000 - 300000',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Range:'301000 - up',
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
     return queryInterface.bulkDelete('Fees', null, {});
  }
};
