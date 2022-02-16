const http = require('http');
const PORT = 8000;
http.createServer((req, res) => {
	res.end('Hello, RIDUS!');
}).listen(PORT);
console.log(`Server is running at http://localhost:${PORT}`);
