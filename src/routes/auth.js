const router = require('express').Router()
const User = require('../model/user')
const { registerValidation } = require('../validation')
const bcrypt = require('bcryptjs')


router.post('/register/', async (req, res) => {
  // validation
  const { error } = registerValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)
  //hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)
  const user = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
    date: new Date()
  })
  try {
    const savedUser = await user.save()
    res.send(savedUser)
  } catch (err) {
    if(err.code === 11000) return res.send(`${Object.keys(err.keyValue)} already exists`)
  }
})

module.exports = router
