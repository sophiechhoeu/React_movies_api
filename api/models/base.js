const mongoose = require('mongoose');

mongoose.Promise = Promise;
// mongoose.connect('mongodb://localhost/movies'); //default port
const db = mongoose.connection;

db.on('open', () => { console.log('Successful connection to MongoDB')});
mongoose.connect('mongodb://localhost/movies', { useMongoClient: true});

module.exports = mongoose;
