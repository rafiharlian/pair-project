const { Cart } = require('../models')
// const Controller = require('./UserController')

class cartController {
    static read(req, res){
        let userId = req.user.id
    Cart.findAll({where:{ userId }})
        .then(result =>{
        res.status(200).json({ data: {result}})
        })
        .catch(err =>{
        res.status(400).json(err)
        })
    }
    static create(req,res){
        const { product_id } = req.params.id
        const { user_id } = req.user.id
        Cart.create({product_id, user_id})
        .then(result =>{
            res.status(200).json('berhasil update')
        })
        .catch(err =>{
            res.status(400).json(err)
        })
    }
}

module.exports = cartController