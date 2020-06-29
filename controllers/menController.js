const { Product } = require('../models')

class menController{
    static menpage(req, res){
        res.render('men')
        
    }
    static menread(req, res){
        Product.findAll()
        .then(result => {
            console.log(result)
            res.render('men', {result})
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }
}

module.exports = menController