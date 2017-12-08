// require('dotenv').config({path: './env'})
// const axios = require('axios');
// const key = process.env.IMDB_KEY;
// const imdb = require('../axios/imdb');

// const api = axios.create({
//   baseURL:`http://www.omdbapi.com/`
// });

const express = require('express')
const bodyParser = require('body-parser')

// create the server
const server = express()

// creating the movies router / controller
const moviesRouter = require('./routes/movies');

// make our server expect json instead of urlencoded
server.use(bodyParser.json());
// server.use(bodyParser.urlencoded());
// Mounting the movies Route
server.use('/movies', moviesRouter);

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
// // FIXME- Modify the res.body
// //       console.log(res.body)
// //       res.send(movies);
//        next();
//    }
// }

// server.get('/',[middleware.logger, middleware.getDataFromMockAPI],(req,res) => {
//   res.json({
//     resources: [{
//       movies: '/movies'
//     }]
//   })
//   // res.status(404).end();
// });


server.get('/', (req,res) => {
  res.json({
    resources: [{
      movies: '/movies'
    }]
  })
  // res.status(404).end();
});

// setting up the port

const port= 7000;
server.listen(port, () => {
  console.log(`Movies API Server running on ${port}`);
});
 // terry is such a cool dude.
