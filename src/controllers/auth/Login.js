const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const express = require('express')
const jwt = require('jsonwebtoken')
const _ = require('lodash')
const mongoose = require('mongoose')
const passport = require('passport')
const passportJWT = require('passport-jwt')

const dbConfig = require('./mongo/dbConfig')
const User = require('./mongo/models/user')

// Initialize the router
const router = express.Router()

// bcrypt setup and import
const saltRounds = 12

// initialize passport
passport.use(strategy)
router.use(passport.initialize())

mongoose.connect(dbConfig.devUrl)

// init body parser
router.use(
  bodyParser.urlencoded({
    extended: true
  })
)

router.use(bodyParser.json())

router.get('/', (req, res) => {
  res.send('works')
})

router.post('/logPost', (req, res) => {
  console.log(req.body)
})
router.get(
  '/secret',
  passport.authenticate('jwt', { session: false }),
  function (req, res) {
    res.json('Success! You can not see this without a token')
  }
)
router.get(
  '/secretDebug',
  function (req, res, next) {
    console.log(req.get('Authorization'))
    next()
  },
  function (req, res) {
    res.json('debugging')
  }
)

router.post('/auth', function (req, res) {
  User.findOne({ username: req.body.username }, (err, data) => {
    if (err) console.log(err)

    if (!data.username) {
      res.json({ message: 'no such user found' })
    }

    bcrypt.compare(req.body.password, data.passwordHash, function (err, test) {
      if (test) {
        // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
        var payload = { id: data.id }
        var token = jwt.sign(payload, jwtOptions.secretOrKey)
        res.json({ message: 'ok', token: token })
      } else {
        res.json({ message: 'passwords did not match' })
      }
    })
  })
})

router.post('/register', function (req, res) {
  User.findOne({ username: req.body.username }, (err, data) => {
    if (err) console.log(err)
    // checks if user exists
    if (data == null) {
      // async bcrypt hash call
      bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        console.log(err)
        console.log('  ')
        console.log(hash)
        // create a user
        let user = new User({
          username: req.body.username,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          passwordHash: hash,
          userType: req.body.userType
        })
        // save the user
        user.save(function (err) {
          if (err) throw err
          console.log(user.password)
          console.log(
            user.firstName + ' ' + user.lastName + 'saved successfully'
          )
          res.json({ success: true })
        })
      })
    } else {
      res.json({ WARNING: 'User Already Exists' })
    }
  })
})

// Exports router to be used in server.js
exports = module.exports = router
