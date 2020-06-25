const router = require('express').Router()
const ProductController = require('../controllers/productController')
router.get('/', ProductController.read)
router.post('/', ProductController.create)
router.delete('/:id', ProductController.delete)
router.put('/harga_barang/:id', ProductController.update)


module.exports=router