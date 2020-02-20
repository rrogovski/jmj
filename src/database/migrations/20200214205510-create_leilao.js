'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'leilao',
      {
        id: { 
          type: Sequelize.INTEGER.UNSIGNED,
          autoIncrement: true,
          allowNull: false,
        },
        codigo: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        descricao: {
          type: Sequelize.STRING(60),
          allowNull: false,
        },
        vendedor: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        inicioPrevisto: {
          type: Sequelize.DATE,
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
      'leilao',
      ['id'],
      {
        type: 'primary key',
        name: 'leilao_pk',
      }
    ))
    .then(() => queryInterface.addConstraint(
      'leilao',
      ['vendedor'],
      {
        type: 'foreign key',
        name: 'vendedor_leilao_fk',
        references: {
          table: 'empresa',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    ));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('leilao');
  }
};
