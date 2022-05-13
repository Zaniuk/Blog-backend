// /* Config */
require('dotenv').config()
const dbPass = process.env.DB_PASS
const mongoose = require('mongoose')
const connectionString = `mongodb+srv://sysAdmin5990:${dbPass}@blogcluster.v6xrb.mongodb.net/Blog?retryWrites=true&w=majority`
//const { postSchema } = require('./model/postSchema')
/* mongoDB connection */
console.log(dbPass)
mongoose.connect(connectionString)
  .then(() => {
    console.log('Connected')
  })
  .catch(err => console.log(err))

//const Post = mongoose.model('Post', postSchema)
/* -------------------------- */

// Post.find({})
//   .then(res => {
//     console.log(res)
//     mongoose.connection.close()
//   })
//   .catch(err => console.log(err))
