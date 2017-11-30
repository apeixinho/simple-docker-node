#!/usr/bin/env nodejs

const express = require('express')
const app = express()
const port = 10002

app.get('/', (req, res) => res.send('Hello from peixe.eu.org'));

app.listen(port, (err) => {
  if (err){
    console.log('something bad happened', err);
  }
   console.log("Example app listening on port", port);
});

