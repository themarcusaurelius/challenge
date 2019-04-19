const express = require('express');
const router = express.Router();
const promisify = require('util').promisify;
const request = promisify(require('request'));
const [getAsync, postAsync] = [request.get, request.post].map(promisify);

router.get('/all', async (req, res) => {
    const api_key = req.apiKey
    const queryURL = `https://a.klaviyo.com/api/v2/lists?api_key=`
    
    const getLists = await getAsync({
        url: queryURL, 
        qs:  { api_key: api_key },
        body: res,
        json: true
    });
    res.sendStatus(getLists.body)
    console.log(getLists.body)
}) 

module.exports = router