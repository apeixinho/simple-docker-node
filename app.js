#!/usr/bin/env nodejs

const express = require('express')
const app = express()
const port = 10001

app.get('/', (request, response) => {
  response.send('Hello from adolfo.peixinho.eu.org')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
