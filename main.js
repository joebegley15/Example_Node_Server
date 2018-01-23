var http = require('http');
var portNum = 8080;
var fs = require('fs');
var index = fs.readFileSync('index.html');

http.createServer(function(request,response){
	response.writeHead(200, {'Content-Type': 'html'});
  	response.end(index);
}).listen(portNum, function(){
	console.log('Server is up and running on port #' + portNum); 
});