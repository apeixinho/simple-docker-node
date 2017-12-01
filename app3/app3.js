#!/usr/bin/env nodejs

const express = require('express');
const path = require('path');
const app = express();
const port = 10003;

// define path from where to server static files, in our case 
// root directory so we don't need to add any path
app.use(express.static(path.join(__dirname)));

// start listening on port 
app.listen(port, (err) => {
  if (err) {
    console.log("Something bad happened !!!", err);
  }
  console.log("Example app1 listening on port", port);
});

// Graceful shutdown
process.on("SIGINT", () => {
  // const cleanUp = () => {
  // Clean up other resources like DB connections
  // }
  console.log("Closing server...");

  app.close(() => {
    console.log("Server closed !!! ");
    // cleanUp();
    process.exit();
  })
  // Force close server after 3secs
  setTimeout((e) => {
    console.log("Forcing server close !!!", e)
    //cleanUp()
    process.exit(1)
  }, 3000)
});