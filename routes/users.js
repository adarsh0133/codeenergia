var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/codeenergia" &&
      "mongodb+srv://adarsh90399:jpajzRPLV3hTy2rz@codeenergia.kflnjth.mongodb.net/?retryWrites=true&w=majority&appName=codeenergia"
  )
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  mobile: Number,
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("user", userSchema);
