/* Required libraries */
const express = require('express')
// const { get } = require('express/lib/response')
require('dotenv').config()
const dbPass = process.env.DB_PASS
//const path = require('path')
const bodyParser = require('body-parser')

const authRoute = require('./routes/auth')
const postsRoute = require('./routes/posts')
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

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
/* _Index */

app.get('/', (_req, res) => {
  res.send('Welcome')
})
app.use('/api/user', authRoute)
app.use('/api/', postsRoute)

/* Express port configuration */
const PORT = process.env.PORT || 80
app.listen(PORT, () => {
  console.log('Server is Listening on ' + PORT)
})
