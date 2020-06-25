const jwt = require('jsonwebtoken')

function generateToken(payload){
    return jwt.sign(payload, 'ryw4tch')
}

function verifyToken(token){
    return jwt.verify(token, 'ryw4atch')
}

module.exports = {
    generateToken,
    verifyToken
}