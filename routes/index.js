const router = require('express').Router()
const user = require('./user')
const product = require('./product')
const cart = require('./cart')

router.use('/product', product)
router.use('/user', user)
router.use('/cart', cart)

module.exports = router