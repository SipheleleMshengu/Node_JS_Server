const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send("Hello From The Server");
});
app.get("/cars", (req,res) => {
    res.send("This Is For For Cars")
});

app.listen(8000, () => {
    console.log("Server Connected Successfully!")
});