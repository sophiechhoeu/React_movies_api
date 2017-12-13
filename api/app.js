const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./middleware/auth');

// create the app
const app = express();

// make our app expect json instead of urlencoded

// secret session in express - signed cookies
app.use(require('cookie-parser')());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(require('express-session')({ secret: 'secret', resave: false, saveUninitialized: false}
));
app.use(authMiddleware.initialize);


// creating the movies router / controller
const moviesRouter = require('./routes/movies');
// Mounting the movies Route
app.use('/movies', moviesRouter);
app.use('/auth', require('./routes/auth'));

// function loadTitle(title) {
//   return api.get(`t=batman`).then((res) => {
//     return res.data
//
//   });
// }

// const movies = [
//   {
//     title: "Avengers"
//   },
//   {
//     title: "Toxic Avenger"
//   },
// ];

// // movies API
// function getAllMovies() {
//   console.log("Mock API processing request data response");
//   let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(Object.assign([], movies));
//     }, 3000);
//
//   });
//   myPromise.then(
//     (promiseMessage) => {
//       console.log(JSON.stringify(movies))
//
//     }
//   )
// }

// const middleware = {
//   logger: function (req, res, next) {
//     console.log(new Date(), req.method, req.originalUrl, req.body);
//     next();
//   },
//   getDataFromMockAPI: function(req, res, next){
//     return api.get(`?apikey=e877d7bd&t=batman`).then((res) => {
//       // return res.data
//       console.log(res.data)
//     })
//     .catch(err => { console.log("error", err);
//
//     })
//
//
//
//    }
// }

// app.get('/',[middleware.logger, middleware.getDataFromMockAPI],(req,res) => {
//   res.json({
//     resources: [{
//       movies: '/movies'
//     }]
//   })
//   // res.status(404).end();
// });


app.get('/', (req,res) => {
  res.json({
    resources: [{
      movies: '/movies'
    }]
  })
  // res.status(404).end();
});


module.exports = app
