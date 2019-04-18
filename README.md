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
Refreshing the page will refresh the request. The list information will be found in the broswer as well as the terminal. The output will be in JSON format and look similar to this:

```
{
  "updated": "2019-04-16T18:42:30Z",
  "list_name": "marksList",
  "folder_name": "",
  "created": "2019-04-15T15:36:26Z"
}
```

## Getting all lists:

To get all lists, in the browser go to the url endpoint: 

```
localhost:3000/lists/all
```
Refreshing the page will refresh the request. The list information will be found in the broswer as well as the terminal. The output will be in JSON format and look similar to this:

```
[
  {
    "list_name": "2ndnewList",
    "list_id": "HDf9U8"
  },
  {
    "list_name": "newList",
    "list_id": "HiCxYA"
  },
  {
    "list_name": "marksThirdList",
    "list_id": "HkPPRu"
  },
  {
    "list_name": "2ndnewList",
    "list_id": "LKTimk"
  },
  {
    "list_name": "marksList",
    "list_id": "MuQTUE"
  },
  {
    "list_name": "3rdnewList",
    "list_id": "NKVMe2"
  },
  {
    "list_name": "marksSecondList",
    "list_id": "P2QvFW"
  },
  {
  "list_name": "3rdnewList",
  "list_id": "PZXCvM"
  }
]
```

## Creating a list:

In the code, find the file `klaviyo-get`, change the input for `list_name` to whatever you want to name the list. Then, in the broswer go the url endpoint: 

```
localhost:3000/lists/create
```
Refresh the page if you need to and the list Id for the new list will appear. The output will be in JSON format and look similar to this:

```
{
  "list_id": "HZE96n"
}
```

## Subscribing to a list

To subscribe to a new list, find the file `klaviyo-subscription` and enter your criteria. You must at least have an email to subscribe. After inputting your email, go to the url endpoint: 

```
localhost:3000/lists/subscribe
```
Refresh the page if you need to and then you will get a status report 200 (Ok) if the request went through. Then check your email for a link to confirm your subscription. 






