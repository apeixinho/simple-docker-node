#!/usr/bin/env nodejs

const express = require('express')
const app = express()
const port = 10001

app.get('/', (request, response) => {
  response.send('Hello from adolfo.peixinho.eu.org')
})

app.listen(port, (err) => {
  if (err){
    console.log('something bad happened', err);
  }
   console.log("Example app listening on port", port);
});
