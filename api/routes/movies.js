const express = require('express');
const Movie = require('../models/movie.js')
const Person = require('../models/person.js')
const router = express.Router()

const authorize = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(403).end();
  }
}


// setting up root routes to render json
// leaving as root if we wanted to add different routes like tvshows etc
// from the then promise return the json
// router.get('/', authorize, (req,res) => {


router.get('/', authorize, (req,res) => {
  Movie.find()
  .populate('director')
  .then(movies => res.json( movies ))
  .catch(error => res.json({ error }))
});

//make a new movie

router.post('/', (req,res) => {
  Movie.create(req.body).then((movie) => {
    res.status(201).json(movie).end();
    // res.json({ movies });
    // console.log({movies})
  })
    .catch(error => res.json({ error }))
});

// router.post('/api', (req,res) => {
//   loadTitle.create(req.body).then((loadTitle) => {
//     res.status(201).json(loadTitle).end();
//     // res.json({ movies });
//     // console.log({movies})
//   });
// });

// router.post('/', (req,res) => {
//   Movie.create({title: "Love Actually", yearReleased: 2003, star: "Hugh Grant"}).then(err,movies => {
//     if (err){
//       // res.statusCode = 404;
//       res.send(err);
//     } else {
//         res.json({ movies});
//       };
//   //req.body should be in json because of parse-body middleware
//
//   //Create new movie
//   // then return then movie as json
//   // with the correct http response code
//   //*
// });
// });

// exporting express router
// node likes this type of export

module.exports = router;
