const http = require('http')
const connect = require('connect')
const app = connect()

app.use(function(req, res) {
  res.end('connect\n')
})

http.createServer(app).listen(3001)