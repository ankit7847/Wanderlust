const User = require("../models/user");

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
  };

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
}

module.exports.signup = async (req, res, next) => {
    let { username, email, password } = req.body;
    const newUser = new User({ username, email });
    const registerUser = await User.register(newUser, password);
    req.login(registerUser, (err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "Welcome To Wanderlust");
        res.redirect("/listings");
    });
};

module.exports.login = async(req, res) => {
    req.flash("success", "Welcome back to Wanderlust");
    const redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logout =  (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are logged out");
        res.redirect("/listings");
    });
};