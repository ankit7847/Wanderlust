const { model } = require("mongoose");

module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.flash("error","You must be logged in to creating listing");
      return  res.redirect("/login");
      }
      next();
}