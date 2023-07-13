const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 8080;

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  const path = q.pathname;

  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (path === '/') {
    fs.createReadStream('index.html').pipe(res);
  } else if (path === '/about') {
    fs.createReadStream('about.html').pipe(res);
  } else if (path === '/contact-me') {
    fs.createReadStream('contact-me.html').pipe(res);
  } else {
    fs.createReadStream('404.html').pipe(res);
  }
});

server.listen(port, () => {
  console.log(`server running at port:${port}`);
});
