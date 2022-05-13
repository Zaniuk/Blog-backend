const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: true,
    min: 8,
    max: 64
  },
  username: {
    type: String,
    required: true,
    unique: true,
    max: 32,
    min: 8
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 64,
    min: 8
  },
  password: {
    type: String,
    required: true,
    max: 32,
    min: 8
  },
  date: {
    type: Date,
    default: Date.now
  }
},
{
  collection: 'users'
}
)

const User = mongoose.model('User', userSchema)

module.exports = User
