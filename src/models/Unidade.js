const { Model, DataTypes } = require('sequelize');

class Unidade extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.INTEGER.UNSIGNED,
    },
    {
      sequelize,
      tableName: 'unidade',
    })
  }
}

module.exports = Unidade;