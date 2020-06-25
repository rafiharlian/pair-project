const router = require('express').Router()
const UserController = require('../controllers/UserController')
const { Router } = require('express')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
module.exports = router