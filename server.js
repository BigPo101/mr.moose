const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (res, req) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});