'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'comprador',
      {
        empresa: { 
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        leilao: { 
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
      }
    )
    .then(() => queryInterface.addConstraint(
      'comprador',
      ['empresa', 'leilao'],
      {
        type: 'primary key',
        name: 'comprador_pk',
      }
    ))
    .then(() => queryInterface.addConstraint(
      'comprador',
      ['empresa'],
      {
        type: 'foreign key',
        name: 'empresa_comp_fk',
        references: {
          table: 'empresa',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    ))
    .then(() => queryInterface.addConstraint(
      'comprador',
      ['leilao'],
      {
        type: 'foreign key',
        name: 'leilao_comp_fk',
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
    return queryInterface.dropTable('comprador');
  }
};
