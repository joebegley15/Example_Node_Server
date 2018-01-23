var http = require('http');
var portNum = 8080;
http.createServer(function(request,response){
	response.writeHead(200);
	response.write('I am a working server');
	response.end();
}).listen(portNum, function(){
	console.log('Server is up and running on port #' + portNum);
});