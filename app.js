const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Feraz Ahmad");
});
const port = 4000;
server.listen(port, "127.0.0.1", () => {
  console.log("hello from the server");
});
