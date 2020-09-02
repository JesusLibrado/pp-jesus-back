var crypto = require('crypto');

module.exports = {
    async signInCredentials (req, res, next){
        var {code, name} = req.body;
        if(code.length != 6){
            next(Error("Code must have six digits"));
        }
        if(name==""){
            next(Error("Name is required"));
        }
        let code_number = Array.from(code, Number);
        let even = code_number.filter(num=>num%2==0).length;
        let odd = code_number.filter(num=>num%2!=0).length;
        if(even == 3 && odd == 3){
            next();
        }else {
            next(Error("not a valid code"));
        }
        
        
    },
    async newUserDataTypes (req, res, next){
        var {name, email, phone, password, age, genre, hobby} = req.body;
        if(name.match(/\d+/) > 0)
            next(Error("Field: name must not have numbers"));
        if(email.match(/[\w\d\.]+(@)[\w]+.\w{2,4}.\w{2,3}/)<1)
            next(Error("Field: email is not valid"));
        if(phone.length != 10 || phone.match(/\d{10}/) < 1)
            next(Error("Field: phone is not valid"));
        if(age.match(/\d{1,3}/) < 1)
            next(Error("Field: age is not valid"));
        if(password.length < 8)
            next(Error("Field: password is not valid"));
        req.body.name = name.toLowerCase();
        req.body.age = Number(age);
        req.body.password = crypto.createHmac('sha256', 'secret').update(password).digest('hex');
        next();
    }
};