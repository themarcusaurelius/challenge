// Use this middleware function in your routes. In your routes access your API key via the request object as it is appended as seen below. 
 
const addAPIKey = (req, res, next) => {
    req.apiKey = 'pk_79e1898a80945d2b8225f6f25cb92faa4c';
     
    next();
  }
   
module.exports = addAPIKey;