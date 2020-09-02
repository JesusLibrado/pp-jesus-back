var express = require('express');
var router = express.Router();

var validator = require('../middlewares/validator');

const User = require('../models/User');

router.post('/new', validator.newUserDataTypes, async function(req, res, next){
    try{
        let user = await User.create(req.body);
        res.json(user);
    }catch(err){
        next(err);
    }
});
router.get('/search', async function(req, res, next){
    var query = req.query;
    let object = new Object();
    if(query.name) object.name = query.name;
    if(query.age) object.age = {$gte: query.age};
    if(query.genre) object.genre = query.genre;
    try{
        let users = await User.find(object);
        res.json(users);
    }catch(err){
        next(err);
    }
});
router.delete('/:id', async function(req, res, next){
    var {id} = req.params;
    try{
        await User.deleteOne({_id: id});
        res.json({msg: "Eliminado exitosamente"});
    }catch(err){
        next(err);
    }
});

module.exports = router;