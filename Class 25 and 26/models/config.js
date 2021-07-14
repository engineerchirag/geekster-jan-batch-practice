var mysql = require('mysql2')
var connection = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  port: 3306,
  database: 'library'
})

module.exports = {
  executeQuery:  function(sql, params, callback) {
    if(params == null){
      connection.query(sql, function(err, result) {
        if(err) {
          console.error(err);
        }
        callback(result)
      })
    } else {
      connection.query(sql, params, function(err, result) {
        if(err) {
          console.error(err);
        }
        callback(result)
      })
    }

  }
}
