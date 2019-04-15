const express = require('express');
const router = express.Router();
const promisify = require('util').promisify;
const request = promisify(require('request'));
 
// Complete the backend route to retreive lists using the Klaviyo List V2 API
// As an example to get you started...
 
// USE ASYNC/AWAIT THROUGHOUT, EXCEPT WHEN SETTING UP THE INITIAL ROUTE AS SEEN BELOW
 
router.get('/lists', async(req, res) => {
   
})
 
 
// Write a route to retreive a single list using the Klaviyo List V2 API
 
 
module.exports = router