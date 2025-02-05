const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello From The Node Server");
});
app.get("/cars", (req, res) => {
  res.send("This Is The Route For Cars");
});

// implement more routes 