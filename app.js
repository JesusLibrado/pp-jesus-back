require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var authorization = require('./middlewares/authorize');

var port = process.env.PORT || 3000;
var app = express();

app.use(morgan(process.env.NODE_ENV=='dev'?'dev':'tiny'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var authRouter = require('./routes/auth');
var apiRouter = require('./routes/api');

app.use('/auth', authRouter);
app.use('/api', authorization, apiRouter);

app.listen(port, ()=>{
    console.log("Server running on port: %s", port);
});