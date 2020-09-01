var jwt = require('jsonwebtoken');

function authorize(req, res, next){
    let authorization = req.headers.authorization;
    console.log(req.headers);
    if(authorization){
        let token = authorization.split(' ')[1];
        jwt.verify(token, 'secret', (err, data)=>{
            if(err){
                next(err);
            }
            console.log(data);
            next();
        });
    }else{
        res.status(404).end();
    }
}

module.exports = authorize;