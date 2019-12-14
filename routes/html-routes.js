var app = express();

// get requests to display html pages



module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(__dirname + "../index.html")
    })
    app.get("/tables", function (req, res) {
        res.sendFile(__dirname + "kaitan-sushi/html files/tables.html")
    });

    app.get("/reserve", function (req, res) {
        res.sendFile(__dirname + "kaitan-sushi/html files/reserve.html")
    });
}