const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

function authentication( req, res, next){
    const decode = verifyToken(req.headers.accesstoken)
    User.findByPk(decode.id)
        .then( data => {
            if(data){
                req.user = decode
                next()
            } else {
                res.status(400).json({msg : 'anda belum melakukan login'})
            }
        })
        .catch(err => {
            res.status(400).json({ msg: err})
        })
}

module.exports = authentication