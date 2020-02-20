const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

class Empresa extends Model {
  static init(sequelize) {
    super.init({
      razaoSocial: DataTypes.STRING(64),
      cnpj: DataTypes.STRING(32),
      logradouro: DataTypes.STRING(64),
      municipio: DataTypes.STRING(64),
      numero: DataTypes.STRING(10),
      complemento: DataTypes.STRING(64),
      bairro: DataTypes.STRING(64),
      cep: DataTypes.STRING(16),
      telefone: DataTypes.STRING(32),
      email: DataTypes.STRING(254),
      site: DataTypes.STRING(254),
      usuario: DataTypes.STRING(20),
      senha: DataTypes.STRING(128),
    }, {
      sequelize,
      tableName: 'empresa',
      defaultScope: {
        attributes: { exclude: ['senha'] },
      },
      scopes: {
        withoutPassword: {
          attributes: { exclude: ['senha'] },
        }
      },
      hooks: {
        beforeCreate: (empresa) => {
          const salt = bcrypt.genSaltSync();
          empresa.senha = bcrypt.hashSync(empresa.senha, salt);
        }
      },
      instanceMethods: {
        validPassword: function(senha) {
          return bcrypt.compareSync(senha, this.senha);
        }
      }
    })
  }
}

module.exports = Empresa;