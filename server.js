const http = require('http');

let requestsCount = 0; 

const server = http.createServer((request, response) => {
	
	switch (request.url) {
		case '/students':
			response.write('STUDENTS ');
			break;
		default:
			response.write('404 NOT FOUND ');
	};

	if (request.url !== '/favicon.ico') {
		requestsCount++;
	};
	response.write('Hello!' + ' Requests count: ' + requestsCount);
	response.end();
});

server.listen(3003);