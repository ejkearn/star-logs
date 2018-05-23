var mongoose = require('mongoose')
var connectionString = 'mongodb://student:student@ds233500.mlab.com:33500/starfeet-db'
var connection = mongoose.connection

mongoose.connect( connectionString)

connection.on('error', err=>{
  console.log('error from DataBase', err)
})


connection.once('open', ()=>{
  console.log('connected to DataBase')
})