const { User } = require('../models')
const { hashPassword, compare } = require('../helpers/bycryptjs')
const { generateToken } = require('../helpers/jwt')

class UserController{
    static register(req, res){
        const{ username, pasword, email } = req.body
        const hash = hashPassword(pasword)
        User.create({ username, pasword: hash, email})
            .then( result => {
                res.status(201).json('Berhasil register')
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }

    static login(req, res){
        const {username, pasword} = req.body
        User.findOne({ where: { username }})
        .then( user => {
            if(user && compare( pasword, user.pasword)){
                let payload = { id: user.id, username: user.username }
                let token = generateToken(payload)
                res.status(200).json({ token })
            } else{
                res.status(400).json({ msg: 'data tidak ditemukan'})
            }
        })
    }
}

module.exports = UserController