const http = require('http');
const fs = require('fs');
var static = require('node-static');

var fileServer = new static.Server('./img');

let html;
let js;
let css;
let config;
let img;

fs.readFile('./index.html', function(err, data) {
  if (err) throw err;
  html = data;
});
fs.readFile('./style.css', function(err, data) {
  if (err) throw err;
  css = data;
});
fs.readFile('./script.js', function(err, data) {
  if (err) throw err;
  js = data;
})
fs.readFile('./config.js', function(err, data) {
  if (err) throw err;
  config = data;
});
http.createServer((req, res) => {
  res.statusCode = 200;
  if(req.url.indexOf('.css') !== -1) {
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(css);
    res.end();
    return;
  }
  if(req.url.indexOf('script.js') !== -1) {
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.write(js);
    res.end();
    return;
  }
  if(req.url.indexOf('config.js') !== -1) {
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.write(config);
    res.end();
    return;
  }
  fileServer.serve(req, res);
//   req.addListener('end', function () {
//     fileServer.serve(req, res);
// }).resume();
  // if(req.url.indexOf('.html') !== -1) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html);
    res.end();
  //   return;
  // }
  // res.writeHead(200, {'Content-Type': 'application/javascript'});
  // res.write(img);
  // res.end();
}).listen(3010);