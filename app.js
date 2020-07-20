const http = require("http");

const routes = require("./routes");

// function rqListener(req, res) {}
// http.createServer(rqListener);

// http.createServer(function (req, res) {});

const server = http.createServer(routes.requestHandler);

server.listen(3000);
