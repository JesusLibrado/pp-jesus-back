module.exports = {
    async signInCredentials (req, res, next){
        var {code, name} = req.body;
        if(code.length != 6){
            next(Error("Code must have six digits"));
        }
        if(name==""){
            next(Error("Name is required"));
        }
        next();
        
    },
    async newUserDataTypes (req, res, next){
        console.log("newUserDataTypes");
        next();
    }
};