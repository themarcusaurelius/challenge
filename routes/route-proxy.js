const express = require('express')
const router = express.Router()
 
// Klaviyo ===================================
 
// Don't forget to add the middleware found in /helpers/middleware.js
 
const KlavGet = require('./klaviyo/klaviyo-get');
 
router.use('/klaviyo/get', KlavGet);
 
module.exports = router