const express = require('express')
const router = express.Router()
const {time} = require('../controllers/blog')
const {signup} = require('../controllers/auth')

const {runValidation} = require('../helpers')
const {userSignupValidator} = require('../helpers/auth')

router.post('/signup', userSignupValidator, runValidation, signup)


module.exports = router