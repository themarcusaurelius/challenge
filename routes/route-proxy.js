const express = require('express')
const router = express.Router()
 
// Klaviyo ===================================
 
// Don't forget to add the middleware found in /helpers/middleware.js
const addAPIKEY = require('../helpers/middleware')

//router.use()
 
const KlavGet = require('./klaviyo/klaviyo-get');
 
router.use('/klaviyo/get', KlavGet);

const KlavPost = require('./klaviyo/klaviyo-post');
 
router.use('/klaviyo/post', KlavPost);


 
module.exports = router