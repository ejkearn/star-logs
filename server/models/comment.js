var mongoose = require('mongoose')
var Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
var schemaName = 'Comment'


var schema = new Schema({
  title:{type: String, required: true},
  content:{type: String, required: true},
  created: { type: Number, required: true, default: Date.now() },
  logId: { type: ObjectId, ref: 'Ship' },
  userId: { type: ObjectId, ref: 'Ship' }

})

module.exports = mongoose.model(schemaName, schema)