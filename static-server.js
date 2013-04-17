var connect = require('connect');
var port = 8080;
connect.createServer(
    connect.static(__dirname)
).listen(port);

console.log("Simple static web server running on http://localhost:" + port);
console.log(__dirname);