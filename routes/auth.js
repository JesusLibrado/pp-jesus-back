var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next){
    console.log(req.body);
    res.json({msg: req.originalUrl});
});

module.exports = router;