const Sequelize = require('sequelize');
const dbConfig = require('../../config/database');

const Empresa = require('../models/Empresa');
const Leilao = require('../models/Leilao');

const connection = new Sequelize(dbConfig);

Empresa.init(connection);
Leilao.init(connection);

module.exports = connection;