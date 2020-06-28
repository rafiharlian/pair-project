const router = require('express').Router()
const menController = require('../controllers/menController')
const { Router } = require('express')

router.get('/', menController.menpage)


module.exports = router