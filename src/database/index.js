const Sequelize = require('sequelize');
const dbConfig = require('../../config/database');

const Empresa = require('../models/Empresa');
const Leilao = require('../models/Leilao');
const Lote = require('../models/Lote');

const connection = new Sequelize(dbConfig);

Empresa.init(connection);
Leilao.init(connection);
Lote.init(connection);

Leilao.associate(connection.models);

module.exports = connection;