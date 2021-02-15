const http = require('http');
console.log("hi");
const server = http.createServer(function(req, res) {
    if (req.url === '/OK') {
        console.log("Inbound 'OK' request being processed...");
        res.writeHead(200);
        // res.end();
     } else {
        // console.log("404 not found");
        res.writeHead(404);
        res.write("oops");
        // res.end();
    }
    res.end();
})

const port = 3000;

server.listen(port, () => {
    console.log(`Listening for requests on port ${port}`);
})
