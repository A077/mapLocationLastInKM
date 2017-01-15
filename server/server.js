var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

//controllers
var schoolController = require("./controllers/schoolController");

//Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json())
app.use("/api", schoolController);

app.listen(5000, function () {
    console.log("Started listening on port", 5000);
});

mongoose.connect("mongodb://heroku_qsvrvmvj:gr51g5j6j4qsdt111ckkj36d04@ds111479.mlab.com:11479/heroku_qsvrvmvj");