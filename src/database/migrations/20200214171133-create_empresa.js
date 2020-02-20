'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'empresa',
      {
        id: { 
          type: Sequelize.INTEGER.UNSIGNED,
          // primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          // unique: true,
        },
        razaoSocial: {
          type: Sequelize.STRING(64),
          allowNull: false,
        },
        cnpj: {
          type: Sequelize.STRING(32),
          allowNull: false,
        },
        logradouro: {
          type: Sequelize.STRING(64),
        },
        municipio: {
          type: Sequelize.STRING(64),
        },
        numero: {
          type: Sequelize.STRING(10),
        },
        complemento: {
          type: Sequelize.STRING(64),
        },
        bairro: {
          type: Sequelize.STRING(64),
        },
        cep: {
          type: Sequelize.STRING(16),
        },
        telefone: {
          type: Sequelize.STRING(32),
        },
        email: {
          type: Sequelize.STRING(254),
          allowNull: false,
        },
        site: {
          type: Sequelize.STRING(254),
        },
        usuario: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        senha: {
          type: Sequelize.STRING(128),
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
      'empresa',
      ['id'],
      {
        type: 'primary key',
        name: 'empresa_pk',
      }
    ))
    .then(() => queryInterface.addConstraint(
      'empresa',
      ['cnpj'],
      {
        type: 'unique',
        name: 'empresa_cnpj_uk',
      }
    ))
    .then(() => queryInterface.addIndex(
      'empresa',
      ['cnpj'],
      {
        type: 'unique',
        name: 'empresa_cnpj_idx',
      }
    ))
    .then(() => queryInterface.addConstraint(
      'empresa',
      ['usuario'],
      {
        type: 'unique',
        name: 'empresa_usuario_uk',
      }
    ))
    .then(() => queryInterface.addIndex(
      'empresa',
      ['usuario'],
      {
        type: 'unique',
        name: 'empresa_usuario_idx',
      }
    ));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('empresa');
  }
};
