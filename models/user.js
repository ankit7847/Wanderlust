const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongosse = require("passport-local-mongoose");

const userSchema = new Schema ({
    email : {
        type : String,
        require : true
    }
});

userSchema.plugin(passportLocalMongosse);

module.exports = mongoose.model('User', userSchema);