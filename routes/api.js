var express = require('express');
var router = express.Router();

var validator = require('../middlewares/validator');

const User = require('../models/User');

router.post('/new', validator.newUserDataTypes, function(req, res, next){
    console.log(req.body);
    var {name, email, phone, password, age, genre, hobby} = req.body;
    res.json({msg: req.originalUrl});
});
router.get('/search', async function(req, res, next){
    var query = req.query;
    console.log(query);
    try{
        let users = await User.find();
        res.json(users);
    }catch(err){
        next(err);
    }
});
router.delete('/:id', function(req, res, next){
    console.log(req.params);
    res.json({msg: req.originalUrl});
});

module.exports = router;