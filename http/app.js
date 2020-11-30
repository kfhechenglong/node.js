const http = require('http')
http.createServer(function(req, res) {
  // console.log(req);

  if(req.url === '/') {
    res.end('Hello World')
  } else if (req.url === '/2') {
    res.end('other Hello World')
  } else {
    res.end({
      a: 1
    })
  }
}).listen(3001)