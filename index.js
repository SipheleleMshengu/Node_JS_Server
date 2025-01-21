// Bringing in the HTTP module so I can create a server
const http = require("http");

// Setting up the server
const server = http.createServer((req, res) => {
  // Just logging the URL that was requested
  console.log(req.url);

  // Checking the URL and sending back the appropriate response
  if (req.url == "/dog") {
    res.end("This is a dog page"); // Responding if it's the dog page
  } else if (req.url == "/cat") {
    res.end("This is a cat page"); // Responding if it's the cat page
  } else {
    res.end("Welcome to the main page"); // Default response for everything else
  }
});

// Starting the server and listening on port 8000
server.listen(8000, "localhost", () => {
  console.log("SUCCESSFULLY CONNECTED TO THE SERVER !!!"); // Logging success message
});
