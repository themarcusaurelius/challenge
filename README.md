# challenge

## Start the server

To start the server, open up the repo in the terminal and input:

```
nodemon server.js
```

## Getting a single list: 

To get single list, in the browser go to the url endpoint:

```
localhost:3000/lists
```
Refreshing the page will refresh the request. The list information will be found in the broswer as well as the terminal.

## Getting all lists:

To get all lists, go to the url endpoint: 

```
localhost:3000/lists/all
```
Refreshing the page will refresh the request. The list information will be found in the broswer as well as the terminal.

## Creating a list:

In the code, find the file `klaviyo-get`, change the input for whatever you want to name the list. Then, in the broswer go the url endpoint: 

```
localhost:3000/lists/create
```
Refresh the page if you need to and the list Id for the new list will appear. 

## Subscribing to a list

To subscribe to a new list, find the file `klaviyo-subscription` and enter your criteria. You must at least have an email to subscribe. After inputting your email, go to the url endpoint: 

```
localhost:3000/lists/subscribe
```
Refresh the page if you need to and then you will get a status report 200 (Ok) if the request went through. Then check your email for a link to confirm your subscription. 






