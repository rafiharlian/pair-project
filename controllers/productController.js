const { Product } = require('../models')

class productController{
    static read(req, res){
        Product.findAll()
        .then(result => {
            res.status(200).json({data : result})
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }
    static create(req,res){
        const{gambar, nama_barang, gender, harga_barang} = req.body
        Product.create({gambar, nama_barang, gender, harga_barang})
        .then(data => {
            res.status(201).json({msg: 'berhasil membuat data produk'})
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }
    static update(){

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