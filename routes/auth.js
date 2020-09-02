var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var moment = require('moment');
var validator = require('../middlewares/validator');

router.post('/', validator.signInCredentials, async function(req, res, next){
    var {code, name} = req.body;
    console.log(req.body);
    let now = moment();
    let later = moment().endOf('hour');
    var duration = moment.duration(later.diff(now)).asMilliseconds();
    var token = await jwt.sign(req.body, 'secret', {expiresIn: duration});
    res.json({token: token, expiresIn: duration, name, code});
});

router.post('/logout', async function(req, res, next){
    res.json({msg: 'logged out'});
});

module.exports = router;