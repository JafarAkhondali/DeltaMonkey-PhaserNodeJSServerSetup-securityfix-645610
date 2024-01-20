// include the HTTP module in the application
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// create a server on your computer:
const server = http.createServer((req, res) => {
	
	// 200 OK status code means that the request was successful
	res.statusCode = 200;
	
	// set the content to text
	res.setHeader('Content-Type', 'text/plain');
	
	// this is what we are going to send to the browser
	res.end('Hello World!');
});

// starts the HTTP server listening for connections
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

