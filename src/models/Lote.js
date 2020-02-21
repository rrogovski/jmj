const { Model, DataTypes } = require('sequelize');

class Lote extends Model {
  static init(sequelize) {
    super.init({
      numeroLote: DataTypes.INTEGER.UNSIGNED,
      descricao: DataTypes.STRING(60),
      quantidade: DataTypes.DECIMAL,
      valorInicial: DataTypes.DECIMAL,
      unidade: DataTypes.STRING(128),
      leilao: DataTypes.INTEGER.UNSIGNED,
    },
    {
      sequelize,
      tableName: 'lote',
    })
  }
}

module.exports = Lote;