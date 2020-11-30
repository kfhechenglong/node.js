const http = require('http')
const connect = require('connect')
const app = connect()
// 对相应进行gzip压缩
const compression = require('compression')
app.use(compression())

const cookieSession = require('cookie-session')
app.use(cookieSession({
  keys: ['jueduilingdu']
}))

// 解析urlencoded的请求体，并赋值给req.body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', function fooMiddleware(req, res, next) {
  console.log(req.url)
  res.end('connect\n')
  next()
})

app.use('/2', function fooMiddleware(req, res, next) {
  res.end('Hello from connect2! \n')
  next()
})
app.use(function(req,res) {
  res.end('end')
})
http.createServer(app).listen(3002)