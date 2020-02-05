const mongoose = require('mongoose')
const Schema = mongoose.Schema

const resourceSchema = new Schema({
  name: String,
  path: String,
  extension: String,
  mimeType: String
})

module.exports = mongoose.model('Resource', resourceSchema);