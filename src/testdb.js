// /* Config */
require('dotenv').config()
const dbPass = process.env.DB_PASS
const mongoose = require('mongoose')
const connectionString = `mongodb+srv://sysAdmin5990:${dbPass}@blogcluster.v6xrb.mongodb.net/Blog?retryWrites=true&w=majority`
const { postSchema } = require('./schemas/postSchema')
/* mongoDB connection */

mongoose.connect(connectionString)
  .then(() => {
    console.log('Connected')
  })
  .catch(err => console.log(err))

const Post = mongoose.model('Post', postSchema)

// const post = new Post({

//   userId: 9,
//   title: 'Una noticia increible',
//   body: 'lorem Ipsum is simply dummy text of verdana aliquet et justo so simple as possible',
//   categories: ['Science', 'Technology'],
//   date: new Date(),
//   ceoTags: ['Featured', 'Recommended']
// })

// post.save()
//   .then(res => {
//     console.log(res)
//     mongoose.connection.close()
//   })
//   .catch(err => console.log(err))

  /* -------------------------- */

Post.find({})
  .then(res => {
    console.log(res)
    mongoose.connection.close()
  })
  .catch(err => console.log(err))
