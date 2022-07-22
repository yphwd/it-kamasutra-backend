const http = require('http');
const fs = require('fs');


const delay = (ms) => {
	return new Promise((resolve, reject) => {
		try {
			setTimeout(() => {
				resolve();
			}, ms)
		} catch (err) {
			reject(err);
		};
	});
};

const readFile = (path) => {
	return new Promise((resolve, reject) => {

		// Асинхронный колбэк для чтения файла

		fs.readFile(path, (error, data) => {
			if (error) reject(err)
			else resolve(data);
		});
	});
};

const server = http.createServer(async (request, response) => {

	switch (request.url) {
		case '/home':
			const data = await readFile('pages/home.html');
			response.write(data);
			response.end();
			break;
		case '/about':
			await delay(3000);
			response.write('ABOUT');
			response.end();
			break;
		default:
			response.write('404 NOT FOUND ');
			response.end();
	};
});

server.listen(3003);