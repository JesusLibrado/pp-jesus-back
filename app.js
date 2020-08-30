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




const Mongoose = require('mongoose');

Mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(params=>
    console.log(`Database connection created [env:${process.env.NODE_ENV}] \nAvailable models:\n`, params.models)
).catch(err=>
    console.log("Database connection refused", err)
);




app.listen(port, ()=>{
    console.log("Server running on port: %s", port);
});