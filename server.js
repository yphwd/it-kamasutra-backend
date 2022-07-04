const http = require('http');

let requestsCount = 0; 

const server = http.createServer((request, response) => {

	switch (request.url) {
		case '/students':
			response.write('STUDENTS ');
		default:
			response.write('404 NOT FOUND ');
	};

	requestsCount++;
	response.write('Hello!' + ' Requests count: ' + requestsCount);
	response.end();
});

server.listen(3003);