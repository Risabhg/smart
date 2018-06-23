var http = require("http");
const REST_PORT = (process.env.PORT || 5000);

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/html'});

   // Send the response body as "Hello World"
   var x=5;
   var z=x+4;
   response.end('<b>Hello World...</b>\n');
    response.end('<b>Hey there...</b>\n');
   response.end(z);
}).listen(REST_PORT);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
