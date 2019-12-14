var app = express();
var path = require("path");
// get requests to display html pages



module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + "../index.html"));
    })
    app.get("/tables", function (req, res) {
        res.sendFile(path.join(__dirname + "../html files/tables.html"));
    });

    app.get("/reserve", function (req, res) {
        res.sendFile(path.join(__dirname + "../html files/reserve.html"));
    });


}