const { Login } = require('../models')

class loginController{
    static loginpage(req, res){
        res.render('login')
        
    }

}

module.exports = loginController