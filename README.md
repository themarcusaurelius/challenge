# challenge

Goal
You will be setting up an API that receives requests to access a "client's" Klaviyo information.

(ie. You will be accessing your own Klaviyo account for the purposes of this challenge)

The routes you are writing that a client wants access to are:

A route to get a specific list
A route to get all lists
A route to create a new list
A route to subscribe a user to a list
Implement middleware
You will need to use the documenation for Klaviyo's List V2 API: https://www.klaviyo.com/docs/api/v2/lists

Set up
There is no frontend dev work required in this challenge!
I would recommend downloading and using Postman to ping your server and test the routes.
To begin with this coding challenge you will need to set up a Klaviyo account here: https://www.klaviyo.com

Once you have an account and are on your dashboard, go to the top right corner and go to Account. From Account select Settings and create an API key for use during this coding challenge.

With this API key generated you are now ready to begin the coding challenge.

Don't forget to npm install the packages.

Within these files you will see I have already set up a basic server for you. If you run npm start you will see it will start up a server listening on your localhost port 3000.

Notes
From here you should begin completing the specified routes above.

To begin you can hardcode your API key into the individual requests as seen in the Klaviyo docs, but later will be required to write middleware that appends the api-key to the request for access in each route.

The get/lists route has a basic structure as an example.

You will notice that the request module has been promisified. I would like you to use async/await everywhere applicable. Promises are permitted, but do not use callbacks. Callbacks are only acceptable in your route declaration as seen in the get/lists route example.

You will need to configure the route-proxy for your post and subscription routes.

Don't forget to use the middleware for easy access to your api key, instead of hardcoding it in every route! This can be done as a refactor after you have gotten the basics working.

With each request to the subscribe endpoint you should pass a key called 'resub'. This key can contain 2 values, 'any' and 'list'. If the resub value is set to 'list' within the subscribe route you should check the list using the check list subscriptions klaviyo endpoint before subscribing the user. If they are already on the list, reject the subscription request, if not continue and subscribe them to the list.
Example request bodies for subscribe
Resub any example:
json: { email: 'someone@gmail.com', gender: 'non-binary', favoriteColor: 'blue', resub: 'any' }

Resub list example:
json: { email: 'someone222@gmail.com', gender: 'female', favoriteColor: 'black', resub: 'list' }