// Load Requirements
var http = require('http');
var fs = require('fs');
var express = require('express');

var portNum = 8080;
var index = fs.readFileSync('index.html');


http.createServer(function(request,response){
	response.writeHead(200, {'Content-Type': 'html'});
  	response.end(index);
}).listen(portNum, function(){
	console.log('Server is up and running on port #' + portNum); 
});