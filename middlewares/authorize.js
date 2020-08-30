var jwt = require('jsonwebtoken');

function authorize(req, res, next){
    let authorization = req.headers.authorization;
    if(authorization){
        let token = authorization.split(' ')[1];
        jwt.verify(token, 'secret', (err, {code, name})=>{
            if(err){
                console.log(err);
                return res.status(400).end();   
            }
            console.log(name);
            next();
        });
    }else{
        res.status(404).end();
    }
}

module.exports = authorize;