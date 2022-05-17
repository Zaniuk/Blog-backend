const router = require('express').Router()
const User = require('../model/user')
const { registerValidation, loginValidation } = require('../validation')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/register/', async (req, res) => {
  // validation
  const { error } = registerValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)
  // hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)
  // create a new user
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
    if (err.code === 11000) return res.send(`${Object.keys(err.keyValue)} already exists`)
  }
})
router.post('/login/', async (req, res) => {
  const { error } = loginValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  const user = await User.findOne({ email: req.body.email })
  if (!user) return res.status(400).send('Email or password is wrong')

  const validPassword = await bcrypt.compare(req.body.password, user.password)
  if (!validPassword) return res.status(400).send('Email or password is wrong')
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
  res.header('auth-token', token).send(token)
  //res.send('Logged successfully')
})

module.exports = router
