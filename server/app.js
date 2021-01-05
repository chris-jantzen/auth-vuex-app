const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const authRouter = require('./routes/authRoutes')

const app = express()

mongoose
  .connect('mongodb://localhost/authapp', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error(err.message))

app.use(express.json())
app.use(
  cors()
  /* {
    origin: 'localhost:8080',
    'Access-Control-Allow-Origin': 'localhost:3000',
  } */
)

app.use('/auth', authRouter)

app.listen(8081, () => console.log('Server Listening...'))
