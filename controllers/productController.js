const { Product } = require('../models')

class productController{
    static read(req, res){
        Product.findAll()
        .then(result => {
            console.log(result)
            res.render('home', {result})
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }
    static create(req,res){
        const{gambar, nama_barang, gender, harga_barang} = req.body
        const  user_Id = req.user.id
        Product.create({gambar, nama_barang, gender, harga_barang, user_Id})
        .then(data => {
            res.status(201).json({msg: 'berhasil membuat data produk'})
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }
    static update(req, res){
        const{harga_barang} = req.body
        const {id} = req.params
        Product.update({harga_barang},{where:{id}})
        .then(result => {
            res.status(200).json('berhasil update data produk')
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }
    static delete(req, res){
        const {id} = req.params
        Product.destroy({where:{id}})
        .then(result => {
            res.status(200).json({msg : 'data berhasil di delete'})
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }

}
module.exports = productController