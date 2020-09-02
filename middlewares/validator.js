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
        console.log("newUserDataTypes");
        next();
    }
};