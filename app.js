// Import the express package 
const express = require("express");
// Initialize express for further use
const app = express();

app.get("/", (req, res) => {
  res.send("Hello From The Node Server");
});
app.get("/cars", (req, res) => {
  res.send("This Is The Route For Cars");
});

// implement more routes 

//POST

//PATCH

//DELETE
