
function validator(req, res, next){
    console.log("At validator for /new");
    next();
}

module.exports = validator;