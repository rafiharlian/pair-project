const router = require('express').Router()
const ProductController = require('../controllers/productController')
router.get('/', ProductController.read)


module.exports=router