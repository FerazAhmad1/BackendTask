const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/about") return res.end("welcomee to about pages");
  if (req.url === "/home") return res.end("Welcome to home page");
  if (req.url === "/node") return res.end("Welcome to my nodejs project");
});
const port = 4000;
server.listen(port, "127.0.0.1", () => {
  console.log("hello from the server");
});
