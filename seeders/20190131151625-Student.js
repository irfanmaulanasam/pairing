'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students',[{
      FullName: 'Zaki fitria',
      Address: 'jalan kebagusan raya no 40',
      Phone: '081321007812',
      Email: 'zakifit@gmail.com',
      Username: 'zakiFitria',
      Password: 'zaki123',
      RegionId: null,
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
     return queryInterface.bulkDelete('Students', null, {});
  }
};
