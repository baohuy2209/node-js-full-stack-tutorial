const http = require('http'); 
const data = (req, res) => {
    res.write('Hello World');
    res.end();
}
http.createServer(data).listen(4500);
console.log("Server running at http://localhost:4500/");