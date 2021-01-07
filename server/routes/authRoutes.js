const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.post('/signup', (req, res) => {
  const userInfo = req.body
  new User(userInfo).save((err, user) => {
    return err
      ? res.status(400).send({
          success: false,
          message: err.message,
        })
      : res.status(201).send({
          success: true,
          user,
        })
  })
})

router.post('/login', (req, res) => {
  User.find(req.body, (err, user) => {
    return err
      ? res.status(400).send({
          success: false,
          message: 'Error Finding User'
        })
      : res.status(200).send({
          success: true,
          user: {
            username: user[0].username,
            email: user[0].email,
            id: user[0]['_id']
          }
        })
  })
})

module.exports = {
  authRouter: router,
}
