const router = require('express').Router()
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')
const cartController = require('../controllers/cartController')

router.get('/', authentication, cartController.read)
router.post('/', authentication, cartController.create)


module.exports = router