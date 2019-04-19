const express = require('express');
const router = express.Router();
const promisify = require('util').promisify;
const request = promisify(require('request'));
const [getAsync, postAsync] = [request.get, request.post].map(promisify);

// Write a route to subscribe a user to a list using the Klaviyo List V2 API
router.get('/subscribe', async (req, res) => {
    const api_key = req.apiKey;
    const list_id = 'MuQTUE'
    const userEmail = 'm.ark.may.field.16@gmail.com';
    const gender = 'boy';
    const list = 'list';
    const favoriteColor = 'radical red';
    const queryURL = `https://a.klaviyo.com/api/v2/list/${list_id}/subscribe`;
    
    const checkSubscriber = await getAsync({
        url: queryURL,
        qs: { api_key: api_key, emails: userEmail },
        body: res, 
        json: true
    })

    const user = checkSubscriber.body
    
    if (user.length !== 0) {
        res.send(checkSubscriber.body)
        console.log(checkSubscriber.body)
    } else {
        const subscribeUser = await postAsync({
            url: queryURL,
            json:   { 
                api_key: api_key, 
                profiles: [
                    { 
                        email: userEmail, 
                        gender: gender, 
                        favoriteColor: favoriteColor, 
                        resub: list 
                    }
                ]
            }
        });
        res.sendStatus(subscribeUser.statusCode)
        console.log(subscribeUser.statusCode)
    }
}) 
 
module.exports = router
