const http = require("http");
const routes = require("./routes");

const server = http.createServer(routes);
const port = 4000;
server.listen(port, "127.0.0.1", () => {
  console.log("hello from the server");
});
