const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url == "/dog") {
    res.end("This is a dog page");
  } else if (req.url == "/cat") {
    res.end("This is a cat page");
  } else {
    res.end("Welcome to the main page");
  }
});
server.listen(8000, "localhost", () => {
  console.log("SUCCESSGULLY CONNECTED TO THE SERVER !!!");
});
