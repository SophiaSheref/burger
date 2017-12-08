var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

//create routes
router.get("/", function(req, res) {
    res.redirect("/index");
  });

//render all burgers to index
router.get("/index", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = { burgers: data };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//create new burger
router.post("/burger/create", function(req, res) {
  burger.insertOne(req.body.burger_name, function() {
  res.redirect("/index");
  });
});

 // Devour a Burger
router.post("/burger/eat/:id", function (req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect("/index");
  });
});

// Export routes for server.js to use.
module.exports = router;
