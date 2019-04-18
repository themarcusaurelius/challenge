const express = require('express');
const router = express.Router();
const promisify = require('util').promisify;
const request = promisify(require('request'));
const [getAsync, postAsync] = [request.get, request.post].map(promisify);
 
// Write a route to create a list using the Klaviyo List V2 API
router.get('/create', async (req, res) => {
    const api_key = req.apiKey
    const list_name = 'here is a new list made just for you!'
    const queryURL = 'https://a.klaviyo.com/api/v2/lists'
    
    const createList = await postAsync({
        url: queryURL,
        form: { api_key: api_key, list_name: list_name },
        json: true
    });

    console.log(createList.body)
    res.send(createList.body)
})
 
module.exports = router