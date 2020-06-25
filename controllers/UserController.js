const { User } = require('../models')
const { hashPassword, compare } = require('../helpers/bcryptjs')
const { generateToken } = require('../helpers/jwt')

class UserController{
    static register(req, res){
        const{ username, password, email } = req.body
        const hash = hashPassword(password)
        console.log(hash)
        User.create({ username, password: hash, email})
            .then( result => {
                res.status(201).json('Berhasil register')
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }

    static login(req, res){
        const {username, password} = req.body
        User.findOne({ where: { username }})
        .then( user => {
            if(user && compare( password, user.password)){
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