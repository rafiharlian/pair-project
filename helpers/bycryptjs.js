const bycrypt = require('bcryptjs')

function hashPassword(password){
    const salt = bycrypt.genSaltSync(10)
    return bycrypt.hashSync(password, salt)
}

function compare(password, hash){
    return bycrypt.compareSync(password,hash)
}

module.exports = {
    hashPassword, compare
}