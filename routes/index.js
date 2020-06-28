const router = require('express').Router()
const user = require('./user')
const product = require('./product')
const cart = require('./cart')
const men = require('./men')

const loginController = require ('../controllers/loginController')
const ControllerProduct = require('../controllers/productController')
const registerController = require('../controllers/registerController')

router.get('/', ControllerProduct.read)
router.use('/product', product)
router.use('/user', user)
router.use('/cart', cart)
router.get('/login', loginController.loginpage)
router.get('/register', registerController.registerpage)
router.use('/men', men )

module.exports = router