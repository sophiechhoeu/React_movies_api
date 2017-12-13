const passport = require('passport');
const JWT = require('jsonwebtoken');
const PassportJWT = require('passport-jwt');
const User = require('../models/user');

//taking the entire user model and stuffing it in memory with serializeUser and deserializeUser
//when the cookie goes out seralize the user, then when it goes out deserialize

passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// in const user
// attributes coming in from the wire

// passport.serializeUser(function(user, done) {
//   done(null, user._id);
// });
//
// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });

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

//taking the user ID from the token and abstantiated
//user id in the payload
//Authorising Token with Bearer and placing it header


passport.use(new PassportJWT.Strategy(
  {
    jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'topsecret',
    algorithm: ['HS256']
  },
  (payload, done) => {
   User.findById(payload.sub)
    .then((user) => {
      if (user) {
        done(null, user)
      } else {
        done(null, false)
      }
    })
    .catch((error) => {
        done(error,false)
    });
  }
));

function signJWTForUser(req, res){
  const user = req.user;
  const token = JWT.sign({
    email: user.email
  },
    'topsecret',
  {
    algorithm: 'HS256',
    expiresIn: '7 days',
    subject: user._id.toString()
  }
);
  res.json({ token });
  next();
}

// function verifyJWTForUser(req, res){
//   const user = req.user;
//   const token = JWT.verify({
//     email: user.email
//   },
//     'topsecret',
//   {
//     algorithm: 'HS384',
//     expiresIn: '7 days',
//     subject: user._id.toString()
//   }
// );
//   res.json({ token })
// }

module.exports = {
  initialize: [ passport.initialize(), passport.session() ],
  register: register,
  signJWTForUser,
  signIn: passport.authenticate('local', { session: false }),
  requireJMT: passport.authenticate('jwt', { session: false})
}
