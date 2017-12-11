const mongoose = require('./base');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String
});

// authorisation requires sessions and cookies
// browser communicates with http and it's stateless there's nothign more than an anonymous relationship
//

UserSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  usernameLowerCase: true,
  session: true
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
