const express = require('express');
const router = express.Router();
const promisify = require('util').promisify;
const request = promisify(require('request'));
 
// Write a route to subscribe a user to a list using the Klaviyo List V2 API
 
 
module.exports = router