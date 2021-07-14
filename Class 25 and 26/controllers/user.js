const express = require('express')
const router = express.Router();
const userModel = require.main.require('models/userModel.js')

app = express()

router.get('/users', (req, res) => {
  console.log("****")
  // db.executeQuery("SELECT * from users;")
  userModel.getUsers((result) => {
    if (!result) {
      res.sendStatus(404).send("No users found");
    } else {
      console.log(result)
      res.sendStatus(200).send({res:result});
    }
  })
})

module.exports = router;

