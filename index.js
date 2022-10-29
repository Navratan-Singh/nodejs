 const http = require('http');
 //  http.createServer((req, resp) => {
 //      resp.write("hello this is Navratan");
 //      resp.end();
 //  }).listen(4500);
 function datacontrol(req, resp) {
     resp.write("<h1>hello this is Navratan</h1>");
     resp.end();
 }
 http.createServer(datacontrol).listen(4500);