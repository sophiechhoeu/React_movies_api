const mongoose = require('./base');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const commentSchema = Schema({
  body: String
})

const actor = {
  type: ObjectId, ref: 'Person'
}

const movieSchema = Schema({
  title: String,
  yearReleased: Number,
  star: String,
  comments: [commentSchema],
  director: actor
  // cast: [ {actor: { type: ObjectId, ref: 'Person'}, character: {..}}],
  // crew: [{}]
});

const Movie = mongoose.models.Movie || mongoose.model('Movie', movieSchema);

// const Movies = [
//   {
//     title: "Wonder Woman",
//     yearReleased: 2017,
//     star: "Gal Gadot"
//   }
// ]

module.exports = Movie
