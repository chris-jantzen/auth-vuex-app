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
  console.log(req.body)
  User.find(req.body, (err, user) => {
    if (err) {
      return res.status(400).send({
        success: false,
        message: 'Error Finding User'
      })
    } else {
      if (user.length) {
        const { username, email, _id } = user[0]
        return res.status(200).send({
          success: true,
          user: {
            username,
            email,
            id: _id
          }
        })
      } else {
        return res.status(400).send({
          success: false,
          message: 'User not found'
        })
      }
    }
  })
})

module.exports = {
  authRouter: router,
}
