const Server = require('./lib/Server')

const server = new Server({
  port: process.env.PORT || 9000,
  router: {
    statusCode: 200, // default response status code
    contentType: 'text/plain' // default response content type
  }
})

server.middle((req, res, next) => {
  next()
})

server.get('/', (req, res) => {
  res.send({
    hello: 'world'
  })
})

server.post('/', (req, res) => {
  res.send({
    hello: 'world'
  })
})
