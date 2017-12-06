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


server.get('/',(req,res) => {
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
