var http = require('http')
var url = require('url')
//The server should respond to all request with a string

var server = http.createServer(function(req,res){
    //Get the URl and parse it
    var parserdUrl = url.parse(req.url,true);

    //Get the path
    var path = parserdUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g, '')

    //Send the response
    res.end('Hello World\n');

    //Log the request path
    console.log('Request is received on this path '+trimmedPath)  
  


})

//Start the server and listen to port 3000

server.listen(3000,function(){
    console.log("Server is listening on port 3000")
})