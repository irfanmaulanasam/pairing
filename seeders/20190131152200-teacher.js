'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    // Username: DataTypes.STRING,
    // Password: DataTypes.STRING,
    // RegionId: DataTypes.INTEGER,
    // feeId: DataTypes.INTEGER,
    // SubjectId:DataTypes.INTEGER,
        return queryInterface.bulkInsert('Teachers', [{
          FullName:'Bima',
          Address:'Bern',
          Phone: '08127483063',
          Email: 'bimaa@gmail.com',
          Username: 'bimama123',
          Password: 'bimama',
          RegionId: null,
          feeId: null,
          SubjectId: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          FullName:'endrue',
          Address:'jalane adoh',
          Phone: '08127483063',
          Email: 'bimaa@gmail.com',
          Username: 'endruegan',
          Password: 'iseethebride',
          RegionId: null,
          feeId: null,
          SubjectId: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          FullName:'Ernest',
          Address:'Pasar Umbul',
          Phone: '08128830265',
          Email: 'ernesta@gmail.com',
          Username: 'ernstia',
          Password: 'iseethebride',
          RegionId: null,
          feeId: null,
          SubjectId: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          FullName:'Latif',
          Address:'Jayakarta',
          Phone: '081229374409',
          Email: 'latifa@gmail.com',
          Username: 'ernstia',
          Password: 'iseethebride',
          RegionId: null,
          feeId: null,
          SubjectId: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          FullName:'lilo',
          Address:'mangun praja no 13',
          Phone: '08121374409',
          Email: 'lilo@gmail.com',
          Username: 'lililo',
          Password: 'gunshaveamunnition',
          RegionId: null,
          feeId: null,
          SubjectId: null,
          createdAt: new Date(),
          updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Teachers', null, {});
  }
};
