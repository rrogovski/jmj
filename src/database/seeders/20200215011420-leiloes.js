'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('leilao', [{
      codigo: 10001,
      descricao: 'Leilão da empresa 01',
      vendedor: 1,
      inicioPrevisto: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      codigo: 10002,
      descricao: 'Leilão da empresa 02',
      vendedor: 2,
      inicioPrevisto: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      codigo: 10003,
      descricao: 'Leilão da empresa 03',
      vendedor: 3,
      inicioPrevisto: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      codigo: 10004,
      descricao: 'Leilão da empresa 04',
      vendedor: 4,
      inicioPrevisto: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      codigo: 10005,
      descricao: 'Leilão da empresa 05',
      vendedor: 5,
      inicioPrevisto: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      codigo: 10006,
      descricao: 'Leilão da empresa 06',
      vendedor: 6,
      inicioPrevisto: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      codigo: 10007,
      descricao: 'Leilão da empresa 07',
      vendedor: 7,
      inicioPrevisto: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      codigo: 10008,
      descricao: 'Leilão da empresa 08',
      vendedor: 8,
      inicioPrevisto: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      codigo: 10009,
      descricao: 'Leilão da empresa 09',
      vendedor: 9,
      inicioPrevisto: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      codigo: 10010,
      descricao: 'Leilão da empresa 10',
      vendedor: 10,
      inicioPrevisto: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('leilao', null, {});
  }
};
