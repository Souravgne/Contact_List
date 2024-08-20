const express = require('express'); 
const router = express.Router(); 


const adminPost = require('../controllers/adminPost_controller')
router.get('/post', adminPost.post)


module.exports = router; 