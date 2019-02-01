'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subjects',[{
      Subject_Name:'fisika',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Subject_Name:'kimia',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Subject_Name:'biologi',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Subject_Name:'matematika',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Subject_Name:'ekonomi',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Subject_Name:'geografi',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Subject_Name:'bahasa inggris',
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
     return queryInterface.bulkDelete('Subjects', null, {});
  }
};
