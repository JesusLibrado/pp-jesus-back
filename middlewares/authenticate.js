function authenticate(req, res, next){
    console.log("at middleware");
    next();
}

module.exports = authenticate;