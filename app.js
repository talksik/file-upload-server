var express = require("express");
var app = express();
var path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

// to read request's body object/dict
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Setup connection for database
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://heroku_rg3dpg4f:3trhj8bvk2g9lp3ocvtbltgvp9@ds259711.mlab.com:59711/heroku_rg3dpg4f";

// route the main assets used by html file throughout all routes
app.use(express.static('assets'));
console.log("Finished Building static files for web page!");

// render the main page to '/home' route
app.use("/home", (req, res) => {
 res.sendFile(__dirname + "/upload.html");
});


app.listen(PORT, () => {
 console.log("Server listening on port " + PORT);
});


/*
  * Inserts the entire given array of orders into collection 'orders'
*/
app.post('/insertorders', function (req, res) {
  var orders = req.body.orders;

  MongoClient.connect(url, function (err, client) {
    if (err) return console.log(err);
    console.log('Connected to Database! Inserting orders');

    var db = client.db("heroku_rg3dpg4f");
    db.collection('orders').insertMany(orders, function (err, result) {
      if (err) return console.log(err);
      return console.log("INSERTED ALL ORDERS");
    });

    client.close();
  });

  res.end('INSERTED ALL ORDERS');
});


/*
  * Retrieves all orders in the collection 'orders'
*/
app.get('/getorders', function (req, res) {
  MongoClient.connect(url, function (err, client) {
    if (err) return console.log(err);
    console.log('Connected to Database! Getting orders!');

    var db = client.db("heroku_rg3dpg4f");
    db.collection('orders').find().toArray(function (err, items) {
      if (err) return console.log(err);

      console.log("INSERTED ALL ORDERS");
      return res.status(200).send({
        error: false,
        message: "successfully retrieved",
        result: items
      });
    });

    client.close();
  });
});
