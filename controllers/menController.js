const { Men } = require('../models')

class menController{
    static menpage(req, res){
        res.render('men')
        
    }

}

module.exports = menController