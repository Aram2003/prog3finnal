const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('collector/data/games.json')
const middlewares = jsonServer.defaults()

var port = process.env.PORT || 3000;
var basicAuth = require('express-basic-auth')
 


server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log('json-server is running on port ' + port + '!')
})