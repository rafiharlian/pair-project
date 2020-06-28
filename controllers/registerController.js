const { Register } = require('../models')

class registerController{
    static registerpage(req, res){
        res.render('register') 
    }

}

module.exports = registerController