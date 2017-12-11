const passport = require('passport');
const User = require('../models/user');

//taking the entire user model and stuffing it in memory with serializeUser and deserializeUser

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// in const user
// attributes coming in from the wire

function register(req, res, next) {
  const user = new User ({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });

  User.register(user, req.body.password, (error, user) => {
    if (error) {
      next(error);
      return;
    }
    // store user in the req object itself so that it is accessible by the following middlewares
    req.user = user;
    next();
  })
}


module.exports = {
  initialize: [ passport.initialize(), passport.session() ],
  register: register,
  signIn: passport.authenticate('local', { session: true })
}
