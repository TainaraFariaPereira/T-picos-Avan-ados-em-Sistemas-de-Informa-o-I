
var minhabiblioteca = require("./minhabiblioteca");
var http = require("http");
var minhaApp = "arquivi pricipal";

console.log(minhabiblioteca.dados);
minhabiblioteca.dados = minhaApp;
console.log(minhabiblioteca.dados);



http.createServer(function (req, response) {

    fs.readFile("meusdados.html", function(err, data){
        response.writeHead(200,{'content-Type': 'text/html'});
        response.write(data)
       
       return response.end();

    });


});