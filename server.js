// Dependencies

var express =require("express");

// set up the Express app
var app = express();
var PORT = 3000;


// set up Express app to handle data parsing

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// ROUTER

require("./routes/api-routes")(app);
require("./routes/html-Routes")(app);

// LISTENER
app.listen(PORT, function () {
    console.log("App listening on PORT:" + PORT);
});