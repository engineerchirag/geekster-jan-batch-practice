// get one, get all, update(status update, user_id), delete
const db = require('./../models/config');

var getAllIssuedBooks = (user_id, callback) => {
  var sql = `SELECT * FROM books WHERE user_id=${user_id}`;
  db.executeQuery(sql, [user_id], function(result) {
    callback(result)
  })
}

