// Dependencies

var express = require("express");

// set up the Express app
var app = express();
var PORT = process.env.PORT || 3000;


// set up Express app to handle data parsing

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// ROUTER


var apiroutes =require("./routes/api-routes")
var htmlroutes =require("./routes/html-routes")

// LISTENER
app.listen(PORT, function () {
    console.log("App listening on PORT:" + PORT);
});