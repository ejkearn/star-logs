var express = require('express')
var bp = require ('body-parser')
var app = express()
var cors = require('cors')
var port = 3000

app.use (cors())

require('./db/mlab-config')

app.use(bp.json())
app.use(bp.urlencoded({
  extended : true
}))

let auth = require('./authentication/auth')
app.use(auth.session)
app.use(auth.router)

//routs


var ships = require('./routes/ships')
var logs = require('./routes/logs')
var comments = require('./routes/comments')


app.use(auth.isLoggedIn)

app.use(ships.router)
app.use(logs.router)
app.use(comments.router)

//catch all
app.get('*', (req, res, next) => {
  res.status(404).send({
    error: 'No matching routes'
  })
})

app.listen(port, () => {
  console.log('server running on port', port)
})