'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'unidade',
      {
        id: { 
          type: Sequelize.INTEGER.UNSIGNED,
          autoIncrement: true,
          allowNull: false,
        },
        nome: {
          type: Sequelize.STRING(128),
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      }
    )
    .then(() => queryInterface.addConstraint(
      'unidade',
      ['id'],
      {
        type: 'primary key',
        name: 'unidade_pk',
      }
    ));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('unidade');
  }
};
