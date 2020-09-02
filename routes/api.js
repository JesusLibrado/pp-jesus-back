var express = require('express');
var router = express.Router();

var validator = require('../middlewares/validator');

const User = require('../models/User');

router.post('/new', validator, function(req, res, next){
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
router.delete('/:id', async function(req, res, next){
    var {id} = req.params;
    try{
        User.deleteOne({_id: id});
        res.json({msg: "Eliminado exitosamente"});
    }catch(err){
        next(err);
    }
});

module.exports = router;