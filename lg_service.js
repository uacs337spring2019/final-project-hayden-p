/**
Hayden Price
CSC 337, Spring 2019
Final Project

This service writes names and emails to a text file for later parsing.
*/

const express = require("express");
const app = express();

const fs = require("fs");

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static('public'));

//this POST sends the contents of the form fields to the txt file
//and therefore the web page
app.post('/', jsonParser, function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    let name = req.body.name;
    let email = req.body.email;

    fs.appendFileSync("names.txt", "Name: " + name + " Email: " + email + '\n');
})

app.listen(3000);

