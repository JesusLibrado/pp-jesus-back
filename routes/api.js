var express = require('express');
var router = express.Router();

router.post('/new', function(req, res, next){
    console.log(req.body);
    var {name, email, phone, password, age, genre, hobby} = req.body;
    res.json({msg: req.originalUrl});
});
router.get('/search', function(req, res, next){
    console.log(req.query);
    res.json({msg: req.originalUrl});
});
router.delete('/:id', function(req, res, next){
    console.log(req.params);
    res.json({msg: req.originalUrl});
});

module.exports = router;