const express = require('express')
const router = express.Router()
const {time} = require('../controllers/blog')
const {signup, signin} = require('../controllers/auth')

const {runValidation} = require('../helpers')
const {userSignupValidator, userSigninValidator} = require('../helpers/auth')

router.post('/signup', userSignupValidator, runValidation, signup)
router.post('/signin', userSigninValidator, runValidation, signin)


module.exports = router