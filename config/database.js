const pg = require('pg');

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