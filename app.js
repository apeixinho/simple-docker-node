#!/usr/bin/env nodejs

var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<!doctype html>\n<html lang="en">\n' +
        '<head>\n<meta charset="utf-8">\n<title>P Web</title>\n' +
        '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
        '</head>\n<body>\n<h1>Why?</h1>\n' +
        '<div id="content"><p>There:</p><ul><li>Because I can</li><li>Why not?!</li><li>Try something new</li><li>For fun ?!?!?</li></ul></div>' +
        '\n</body>\n</html>');
    res.end();
}).listen(10001, 'localhost');
//console.log('Server running at http://localhost:8081/');
