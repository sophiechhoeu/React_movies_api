const express = require('express');
const authMiddleware = require('../middleware/auth.js');
const router = express.Router();
//if the user passes the req and response we want the user info on the request session
// middleWare on one route only is captured middleware

// Register as a user

router.post('/register',
  authMiddleware.register,
  (req, res) => {
    res.json({ user: req.user })
  }
);

// sign in a user

router.post('/signin',
  authMiddleware.signIn,
  (req, res) => {
    res.json({ user: req.user })
  }
);

module.exports = router;
