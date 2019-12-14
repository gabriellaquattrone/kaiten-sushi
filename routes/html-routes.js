var express = require('express');
var path = require("path");
var app = express();
// get requests to display html pages



module.exports = function (app) {
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../index.html"));
    })
    app.get("/tables", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/tables.html"));
    });

    app.get("/reserve", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/reserve.html"));
    });


}