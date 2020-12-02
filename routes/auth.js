const express = require('express')
const router = express.Router()
const {time} = require('../controllers/blog')
const {signup} = require('../controllers/auth')


router.post('/signup', signup)


module.exports = router