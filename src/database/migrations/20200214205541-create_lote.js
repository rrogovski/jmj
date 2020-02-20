'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'lote',
      {
        id: { 
          type: Sequelize.INTEGER.UNSIGNED,
          autoIncrement: true,
          allowNull: false,
        },
        numeroLote: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        descricao: {
          type: Sequelize.STRING(60),
          allowNull: false,
        },
        quantidade: {
          type: Sequelize.DECIMAL,
          allowNull: false,
        },
        valorInicial: {
          type: Sequelize.DECIMAL,
        },
        unidade: {
          type: Sequelize.STRING(128),
          allowNull: false,
        },
        leilao: {
          type: Sequelize.INTEGER.UNSIGNED,
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
      'lote',
      ['id'],
      {
        type: 'primary key',
        name: 'lote_pk',
      }
    ))
    .then(() => queryInterface.addConstraint(
      'lote',
      ['leilao'],
      {
        type: 'foreign key',
        name: 'leilao_lote_fk',
        references: {
          table: 'leilao',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    ));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('lote');
  }
};
