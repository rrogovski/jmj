const { Model, DataTypes } = require('sequelize');

class Leilao extends Model {
  static init(sequelize) {
    super.init({
      codigo: DataTypes.INTEGER.UNSIGNED,
      descricao: DataTypes.STRING(60),
      vendedor: DataTypes.INTEGER.UNSIGNED,
      inicioPrevisto: DataTypes.DATE,
    }, {
      sequelize,
      tableName: 'leilao',
    })
  }
}

module.exports = Leilao;