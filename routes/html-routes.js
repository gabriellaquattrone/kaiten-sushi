var app = express();

// get requests to display html pages



module.exports = function (app) {
    app.get("/tables", function (req, res) {
        res.sendFile("kaitan-sushi/html files/tables.html")
    });

    app.get("/reserve", function (req, res) {
        res.sendFile("kaitan-sushi/html files/reserve.html")
    });
}