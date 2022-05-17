const router = require('express').Router()
const userValidations = require('./verifyToken')
const Post = require('../model/postSchema')
/* GET all posts */

router.get('/posts/', (_req, response) => {
  Post.find({})
    .then(res => {
      response.json(res)
    })
    .catch(err => console.log(err))
})

/* GET all post for a given userId */

router.get('/posts/:id', (req, response) => {
  const id = req.params.id
  Post.find({ userId: id })
    .then(res => response.json(res))
    .catch(err => console.log(err))
})

/* CREATE a new post */

router.post('/posts/', userValidations, (req, res) => {
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
module.exports = router
