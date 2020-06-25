const { Product } = require('../models')

const authorization = (req, res, next) => {
    const userId = req.user.id
    const { id } = req.params
    Product.findByPk(id)
        .then( data => {
            if(data.userId == userId){
                next()
            } else {
                next({status : 400, msg: ' ini bukan akun anda'})
            }
        }) 
        .catch(err => {
            next(err)
        })
}

module.exports = authorization