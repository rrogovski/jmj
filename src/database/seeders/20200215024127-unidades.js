'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('unidade', [{
      nome: 'unidade',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'metro',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'kilograma',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'tonelada',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('unidade', null, {});
  }
};
