// Data from data files

var tableData = require("../data/table-data");
var waitData = require("../data/wait-data");

var express = require('express');
var app = express();

module.exports = function (app) {

    //show JSON for table and waitlist

    app.get("/api/tables", function (req, res) {
        res.json(tableData);
    });

    app.get("/api/waitlist", function (req, res) {
        res.json(waitData);
    });



};

