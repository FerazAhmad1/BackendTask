const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  const body = [];

  if (req.url === "/") {
    fs.readFile("./message.text", "utf-8", (err, data) => {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>Enter Message</title></head>");
      res.write(
        `<body><h1>${data}</h1><Form action="/message" method = "POST" ><input type="text" name = "message" ><button type = "submit">Send</button></Form></body>`
      );
      res.write("</html>");
      return res.end();
    });
  }
  if (url === "/message" && method === "POST") {
    req.on("data", (data) => {
      body.push(data);
    });
    return req.on("end", () => {
      const parsebody = Buffer.concat(body).toString();
      const message = parsebody.split("=")[1];
      console.log("parseBody", parsebody);
      fs.writeFile("./message.text", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  // res.setHeader("Content-Type", "text/html");
  // res.end();
  // return;
});
const port = 4000;
server.listen(port, "127.0.0.1", () => {
  console.log("hello from the server");
});
