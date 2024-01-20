const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	
	console.log(`server ${req.url}`);
	
	// check the URL of the request
	switch(req.url) {
		
		// is the url content.txt?
		case '/content.txt' :
			res.writeHead(200, {'content-type': 'text/plain'});
			fs.createReadStream('content.txt').pipe(res);
			break;

		// is the url everything but content.txt?
		default :
			res.writeHead(200, {'content-type': 'text/html'});
			fs.createReadStream('../2.simplepage/simplepage.html').pipe(res);
	}
});

server.listen(port, hostname, () => {
	console.log(`Server is running at http://${hostname}:${port}/`);
});