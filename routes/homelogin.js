const router = require('express').Router()
const homeloginController = require('../controllers/homeloginController')
const { Router } = require('express')
const { homeloginpage } = require('../controllers/homeloginController')

router.get('/', homeloginController.homeloginpage)
router.get('/home', homeloginController.homeloginread)



module.exports = router