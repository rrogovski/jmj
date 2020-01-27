const pg = require('pg');

const connectionString = 'postgres://postgres:postgres@localhost/jmj';

module.exports = {
  async query (sql) {      
    return new Promise((resolve,reject) => {
      try {
        pg.connect(connectionString, function(err, client, done) {
          if(err) {
            reject({
              ok: false,
              result: err
            })
          }
          client.query(sql, function(err, result) {
            // console.log(sql);
            // console.log(err);
            // console.log(result);
            if (result.command === 'DELETE'){
              resolve({
                ok: result.rowCount > 0,
                result: result
              });
              done();
            } else {
              resolve({
                ok: !err,
                result: err ? err : result
              });
              done();
            }
          })
        })
      } catch (error) {
        reject({
          ok: false,
          result: error
        })
      }
    });
  },
};