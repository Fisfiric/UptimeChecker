var http = require('http');
const { StringDecoder } = require('string_decoder');
var url = require('url')
var stringDecoder = require('string_decoder').StringDecoder;
//The server should respond to all request with a string

var server = http.createServer(function(req,res){
    //Get the URl and parse it
    var parserdUrl = url.parse(req.url,true);

    //Get the path
    var path = parserdUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g, '')

    //Get the query string as a object
    var queryStringObject = parserdUrl.query;
    queryStringObject.toString = function () { return JSON.stringify(this); };

    //Get the HTTP method
    var method = req.method.toLowerCase();

    //Get the headers as an object
    var headers = req.headers;
    headers.toString = function () { return JSON.stringify(this); };

    //Get the payload if there is any
    var decoder = new StringDecoder('utf-8');
    var buffer = '';
    req.on('data',function(data){
        buffer+=  decoder.write(data)

    })
    req.on('end', function(){
        buffer+= decoder.end();

    //Send the response
    res.end('Hello World\n');

    //Log the request path
    console.log('Rerquest received with this payload: '+ buffer)  
    })



})

//Start the server and listen to port 3000

server.listen(3000,function(){
    console.log("Server is listening on port 3000")
})