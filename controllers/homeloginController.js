
const { Product } = require('../models')



class homeloginController{
    static homeloginpage(req, res){
        res.render('homelogin')
    }
    static homeloginread(req, res){
        Product.findAll()
        .then(result => {
           
            res.render('homelogin', {result})
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }
}

module.exports = homeloginController