const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const RouteProxy = require('./routes/route-proxy')
const morgan = require('morgan')
const lists = require('./routes/klaviyo/klaviyo-get')
const create = require('./routes/klaviyo//klaviyo-post')
const subscribe = require('./routes/klaviyo/klaviyo-subscription')
const all = require('./routes/klaviyo/klaviyo-getAll')
const addAPIKEY = require('./helpers/middleware');

app.disable('x-powered-by')
app.set('etag', false)
app.get('/cf', (req, res) => res.sendStatus(200))

 
app.set('trust proxy', 'loopback')
app.disable('x-powered-by')
app.set('etag', false)
app.use(cookieParser())
app.use(morgan('dev'));
 
app.use(bodyParser.urlencoded({ limit: '256kb', extended: true }))
 
app.use(bodyParser.json({
  limit: '256kb',
  type: [
    'application/x-www-form-urlencoded',
    'text/plain',
    'application/octet-stream',
    'application/json',
    'application/json; charset=utf-8',
    'text/plain;charset=UTF-8',
    'text/plain;charset=utf-8',
    'text/html; charset=utf-8'
  ]
}))
 
app.use('/api/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.get('origin'));
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Authorization, Content-Length, X-Requested-With, Origin, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', true);
 
  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

//Middleware
app.use(addAPIKEY);

//Routes 
app.use('/api/integrations', RouteProxy)
app.use('/', lists)
app.use('/lists', create, subscribe, all)
 
const PORT = process.env.PORT || 3000
 
app.listen(PORT, () => {
  console.log(`Server Started on Port: ${PORT}!`)
})

module.exports = { server: app }