var express = require("express");
var app = express();
var port = 3000;

app.use(express.static('assets'));
console.log("Finished Building static files for web page!");


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://heroku_rg3dpg4f:3trhj8bvk2g9lp3ocvtbltgvp9@ds259711.mlab.com:59711/heroku_rg3dpg4f";
var db;

MongoClient.connect(url, function (err, client) {
  if (err) return console.log(err);
  console.log('Connected!');
  db = client.db('heroku_rg3dpg4f')
  app.listen(port, () => {
   console.log("Server listening on port " + port);
  });
  db.close();
});

app.use("/", (req, res) => {
 res.sendFile(__dirname + "/assets/upload.html");
});
