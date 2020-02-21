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

  static associate(models) {
    this.belongsTo(models.Empresa, { foreignKey: 'vendedor', as: 'dados_vendedor'} );
  }
}

module.exports = Leilao;