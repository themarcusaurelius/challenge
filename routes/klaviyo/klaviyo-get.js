const express = require('express');
const router = express.Router();
const promisify = require('util').promisify;
const request = promisify(require('request'));
const [getAsync, postAsync] = [request.get, request.post].map(promisify);

//Get One List
router.get('/lists', async (req, res) => {
    const api_key = req.apiKey
    const list_id = 'MuQTUE'
    const queryURL = `https://a.klaviyo.com/api/v2/list/${list_id}`
    
    const getLists = await getAsync({
        url: queryURL,
        qs: { api_key: api_key },
        body: res,
        json: true
    });
    res.send(getLists.body)
    console.log(getLists.body)
})

module.exports = router