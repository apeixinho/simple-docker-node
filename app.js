#!/usr/bin/env nodejs

var http = require("http");
var connect = require('connect');
// console.log('\n\n--- Node Version: ' + process.version + ' ---');

// Set up Connect routing
var app = connect()
    .use(connect.static(__dirname + '/sites/ap'))
    .use(function(req, res) {
        console.log('Could not find handler for: ' + req.url);
        res.end('Could not find handler for: ' + req.url);
    })
    .use(function(err, req, res, next) {
        console.log('Error trapped by Connect: ' + err.message + ' : ' + err.stack);
        res.end('Error trapped by Connect: ' + err.message);
    });

// Start node server listening on specified port -----
http.createServer(app).listen(10001);

// console.log('HTTP server listening on port 80');
