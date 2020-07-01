const { Product } = require('../models')

class ladiesController{
    static ladiespage(req, res){
        res.render('ladies')
        
    }
    static ladiesread(req, res){
        Product.findAll({
            where: {
              gender: 'Wanita'
            }
          })
        .then(result => {
            
            res.render('ladies', {result})
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }
}

module.exports = ladiesController