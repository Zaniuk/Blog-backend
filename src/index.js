/* Required libraries */
const express = require('express')
// const { get } = require('express/lib/response')
require('dotenv').config()
const dbPass = process.env.DB_PASS
//const path = require('path')
const bodyParser = require('body-parser')

const Post = require('./model/postSchema')
const User = require('./model/user')
const bcrypt = require('bcryptjs')
const authRoute = require('./routes/auth')
/* */

const cors = require('cors')
const mongoose = require('mongoose')
/* MongoDB Connection */
const connectionString = `mongodb+srv://sysAdmin5990:${dbPass}@blogcluster.v6xrb.mongodb.net/Blog?retryWrites=true&w=majority`

mongoose.connect(connectionString)
  .then(() => {
    console.log('Connected')
  })
  .catch(err => console.log(err))

// const Post = mongoose.model('Post', postSchema)
const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
/* _Index */

app.get('/', (_req, res) => {
  res.send('Welcome')
})
/* Login */
//app.use('/register/', express.static(path.join(__dirname, 'public', 'register', 'register.html')))

/* Register */

app.use('/api/user', authRoute)
/* GET all posts */

app.get('/api/posts/', (_req, response) => {
  Post.find({})
    .then(res => {
      response.json(res)
    })
    .catch(err => console.log(err))
})

/* GET all post for a given userId */

app.get('/api/posts/:id', (req, response) => {
  const id = req.params.id
  Post.find({ userId: id })
    .then(res => response.json(res))
    .catch(err => console.log(err))
})

/* CREATE a new post */

app.post('/api/posts', (req, res) => {
  const postReq = req.body
  const post = new Post({
    userId: postReq.userId,
    title: postReq.title,
    body: postReq.body,
    categories: postReq.categories,
    date: new Date(),
    ceoTags: postReq.ceoTags
  })
  /* Validation */
  post.validate((err) => {
    if (err) {
      res.json(err)
    } else {
      res.json(postReq)
      post.save()
    }
  })
})
/* Express port configuration */
const PORT = process.env.PORT || 80
app.listen(PORT, () => {
  console.log('Server is Listening on ' + PORT)
})
