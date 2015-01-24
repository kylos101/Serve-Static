var connect = require('connect');
var serveStatic = require('serve-static');
var fs = require('fs');

// Serve static content from a CLI specified folder
// example: node server.js ..\Some\Application
process.argv.forEach(function (val, index, array) {
  fs.stat(val, function (err, stats) {
    if (!err && stats.isDirectory())
    {
      connect().use(serveStatic(val)).listen(8080);
    }
  });
});
