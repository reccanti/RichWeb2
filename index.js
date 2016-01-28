// imports node's built-in http server system
var http = require('http');


/*
 * every internet connected device has a unique IP address.
 * every device has ~65,000 "ports". These are places where
 * bits are input and output. You should only run one server
 * on one port. Some of these ports are reserved by the system. 
 */
var port = 3000;


/*
 * This is the function that will be called whenever someone 
 * makes a request to our server. It accepts a request and 
 * response object. 
 *
 * request is an object that provides data from the user
 * which contains information about the request being made.
 * 
 * "response" is an object that contains the information that
 * will be sent to the user.
 */
function onRequest(request, response) {
	
		/*
		 * This writes the header for the http request
		 */
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
}


/*
 * The "http" module creates a server and waits for someone to 
 * request access to it. When it receives a request, it calls
 * a callback function, in this case onRequest.
 */ 
http.createServer(onRequest).listen(port);


// sanity test to make sure the program is running
console.log("listening on port: " + port);