const router = require('express').Router()
const ladiesController = require('../controllers/ladiesController')
const { Router } = require('express')

router.get('/', ladiesController.ladiespage)
router.get('/ladiesproduct', ladiesController.ladiesread)


module.exports = router