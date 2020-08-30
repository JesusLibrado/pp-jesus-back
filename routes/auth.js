var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var moment = require('moment');

router.post('/', async function(req, res, next){
    var {code, name} = req.body;
    let now = moment();
    let later = moment().endOf('hour');
    var duration = moment.duration(later.diff(now)).asMilliseconds();
    var token = await jwt.sign(req.body, 'secret', {expiresIn: duration});
    res.json({token: token, expiration: duration});
});

module.exports = router;