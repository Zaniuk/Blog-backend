const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
  userId: Number,
  title: String,
  body: String,
  categories: Array,
  date: Date,
  ceoTags: Array
})
module.exports = postSchema
