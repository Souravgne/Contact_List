const express = require('express')
const router = express.Router(); 
const homeController = require('../controllers/home_controllers')

console.log("router is running good")

router.get('/', homeController.home )
router.use('/users', require('./users'))
router.use('/admin' , require('./admin'))

module.exports = router; 
 
