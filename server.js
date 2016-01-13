var http = require('http')
var ecstatic = require('ecstatic')

http
  .createServer(ecstatic('www'))
  .listen(3000)
