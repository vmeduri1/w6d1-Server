const http = require("http");
console.log("hi");
const server = http.createServer(function (req, res) {
  if (req.url === "/OK") {
    console.log("Inbound 'OK' request being processed...");
    res.writeHead(200);
    // res.end();
  } else if (req.url === "/Bad-Request") {
    res.writeHead(400);
    res.write("...bad request");
  } else if (req.url === "/Created") {
    res.writeHead(201);
    res.write("created");
  } else if (req.url === "/Forbidden") {
    res.writeHead(403);
    res.write("forbidden");
  } else if (req.url === "/Found") {
    res.writeHead(302);
    res.write("found");
  } else if (req.url === "/Gateway-Timeout") {
    res.writeHead(504);
    res.write("gateway timeout");
  } else if (req.url === "/Internal-Server-Error") {
    res.writeHead(500);
    res.write("internal server error");
  } else if (req.url === "/Moved-Permanently") {
    res.writeHead(301);
    res.write("moved perm.");
  } else if (req.url === "/Unauthorized") {
    res.writeHead(401);
    res.write("unauthorized");
  } else {
    // console.log("404 not found");
    res.writeHead(404);
    res.write("oops");
    // res.end();
  }
  res.end();
});
const port = 3000;
server.listen(port, () => {
  console.log(`Listening for requests on port ${port}`);
});
