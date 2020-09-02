module.exports = (err, req, res, next)=>{
    console.log("error caught", err);
    next();
}