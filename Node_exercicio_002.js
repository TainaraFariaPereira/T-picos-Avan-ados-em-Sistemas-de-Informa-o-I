var minhabiblioteca = require("./minhabiblioteca");
var http = require("http");
var minhaApp = "arquivi pricipal";

console.log(minhabiblioteca.dados);



http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    es.write(console.log (minhabiblioteca.dados));
    res.end();
}).listen(8080);
