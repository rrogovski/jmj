const pg = require('pg');

const connectionString = 'postgres://postgres:postgres@localhost/jmj';

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'jmj_2',
  define: {
    timestamps: true,
    underscored: false,      
    freezeTableName: true,
  },
};