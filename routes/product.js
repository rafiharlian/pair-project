const router = require('express').Router()
const ProductController = require('../controllers/productController')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

router.get('/', ProductController.read)
router.post('/',authentication, ProductController.create)
router.delete('/:id',authentication,authorization, ProductController.delete)
router.put('/harga_barang/:id',authentication, authorization, ProductController.update)


module.exports=router