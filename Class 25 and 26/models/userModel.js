// get one, get all, update(status update), delete
const db = require('./../models/config');
var getUser = (user_id, callback) => {
  var sql = `SELECT * FROM users WHERE user_id=${user_id}`;
  db.executeQuery(sql, [user_id], function(result) {
    callback(result)
  })
}

var getUsers = (callback) => {
  var sql = `SELECT * FROM users`;
  db.executeQuery(sql, function(result) {
    callback(result);
  })
}

var updateUser = (user,[user_id], callback) => {  //user = {name: name, email: email, status: status}
  var sql = `UPDATE user SET`  //update user set name='kanika', 
  for (let attribute in user) {
    sql += attribute + " = " + user[attribute] + ','
  }
  sql.slice(0, sql.length-1)
  sql += 'WHERE user_id = ${user_id}'
  db.executeQuery(sql, [user_id], function(result) {
    callback(result)
  })
}

var deleteUser = ([user_id], callback) => {
  var sql = `DELETE FROM users WHERE user_id=${user_id}`;
  db.executeQuery(sql, [user_id], function(result) {
    callback(result)
  })
}
// create table transactions(user_id int, book_id int, date_of_transaction datetime, type varchar(8), fees int)