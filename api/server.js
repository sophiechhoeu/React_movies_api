// // require('dotenv').config({path: './env'})
// // const axios = require('axios');
// // const key = process.env.IMDB_KEY;
// // const imdb = require('../axios/imdb');
//
// // const api = axios.create({
// //   baseURL:`http://www.omdbapi.com/`
// // });
//
// const express = require('express');
// const bodyParser = require('body-parser');
// const authMiddleware = require('./middleware/auth');
//
// // create the server
// const server = express();
//
// // make our server expect json instead of urlencoded
//
// // secret session in express - signed cookies
// server.use(require('cookie-parser')());
// server.use(bodyParser.json());
// server.use(bodyParser.urlencoded());
// server.use(require('express-session')({ secret: 'secret', resave: false, saveUninitialized: false}
// ));
// server.use(authMiddleware.initialize);
//
//
// // creating the movies router / controller
// const moviesRouter = require('./routes/movies');
// // Mounting the movies Route
// server.use('/movies', moviesRouter);
// server.use('/auth', require('./routes/auth'));
//
// // function loadTitle(title) {
// //   return api.get(`t=batman`).then((res) => {
// //     return res.data
// //
// //   });
// // }
//
// // const movies = [
// //   {
// //     title: "Avengers"
// //   },
// //   {
// //     title: "Toxic Avenger"
// //   },
// // ];
//
// // // movies API
// // function getAllMovies() {
// //   console.log("Mock API processing request data response");
// //   let myPromise = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       resolve(Object.assign([], movies));
// //     }, 3000);
// //
// //   });
// //   myPromise.then(
// //     (promiseMessage) => {
// //       console.log(JSON.stringify(movies))
// //
// //     }
// //   )
// // }
//
// // const middleware = {
// //   logger: function (req, res, next) {
// //     console.log(new Date(), req.method, req.originalUrl, req.body);
// //     next();
// //   },
// //   getDataFromMockAPI: function(req, res, next){
// //     return api.get(`?apikey=e877d7bd&t=batman`).then((res) => {
// //       // return res.data
// //       console.log(res.data)
// //     })
// //     .catch(err => { console.log("error", err);
// //
// //     })
// //
// //
// //
// //    }
// // }
//
// // server.get('/',[middleware.logger, middleware.getDataFromMockAPI],(req,res) => {
// //   res.json({
// //     resources: [{
// //       movies: '/movies'
// //     }]
// //   })
// //   // res.status(404).end();
// // });
//
//
// server.get('/', (req,res) => {
//   res.json({
//     resources: [{
//       movies: '/movies'
//     }]
//   })
//   // res.status(404).end();
// });

// setting up the port
const app = require('./app');
const port= 7000;
app.listen(port, () => {
  console.log(`Movies API Server running on ${port}`);
});


 // terry is such a cool dude.
