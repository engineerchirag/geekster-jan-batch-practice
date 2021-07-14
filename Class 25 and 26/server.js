const express = require('express')
const user = require('./controllers/user')
const userModel = require('./models/userModel')
// const book = require('./controllers/book')
const app = express()

//routes
// app.use('/admin', admin)
app.use('/user', user)
// app.use('/book', book)

// user - CRUD, (get 1 and get all)
// books - CRUD
// transactions - get one, get all, create
// categories - (HW)
// books threshold create
var port = 8000

app.listen(port, () => {
  console.log("Server running at "+ port)
})

