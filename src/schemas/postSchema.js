const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  categories: Array,
  date: Date,
  ceoTags: Array
})
module.exports = postSchema
