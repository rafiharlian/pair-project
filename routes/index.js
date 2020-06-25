const router = require('express').Router()
const user = require('./user')
const product = require('./product')

router.use('product', product)

router.use('/user', user)

module.exports = router