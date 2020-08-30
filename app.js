require('dotenv').config();

var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.listen(port, ()=>{
    console.log("Server running on port: %s", port);
});

module.exports = app;