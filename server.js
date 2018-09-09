var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
   fs.readFile('./public/index.html', 'UTF-8', function(err, data){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
   });
}).listen(3000);