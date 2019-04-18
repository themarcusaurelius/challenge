const express = require('express');
const router = express.Router();
const promisify = require('util').promisify;
const request = promisify(require('request'));
const [getAsync, postAsync] = [request.get, request.post].map(promisify);

// Write a route to subscribe a user to a list using the Klaviyo List V2 API
router.get('/subscribe', async (req, res) => {
    const api_key = req.apiKey
    const email = 'markmayfieldrealtor@gmail.com'
    const gender = 'male'
    const resub = 'list'
    const favoriteColor = 'green'
    const queryURL = 'https://a.klaviyo.com/api/v2/list/MuQTUE/subscribe'
    
    const listSubscribe = await postAsync({
        url: queryURL,
        json: { 
                api_key: api_key, 
                profiles: [
                    { 
                        email: email, 
                        gender: gender, 
                        favoriteColor: favoriteColor, 
                        resub: resub 
                    }
                ]
            }
    });

    res.send(listSubscribe.status)
    console.log(listSubscribe.state)
    
}) 
 
module.exports = router