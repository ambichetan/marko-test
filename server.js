require('marko/node-require');
const http = require('http');
const hello = require('./hello');
const port = 8080;

http.createServer((req, res) => {
  res.setHeader('content-type', 'text/html');
  hello.render({
    name: 'chetan ambi'
  }, res);
}).listen(port);
