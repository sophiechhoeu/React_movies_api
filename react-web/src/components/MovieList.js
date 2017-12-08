import React from 'react';
import Movie from './Movie'

export default function Movielist({ movies }) {
  console.log(movies)
  return (
    <div>
      <h1>Movie List!</h1>
      {
        movies.map(movie => {
          return <Movie {...movie} key={movie._id} />
        })
      }
    </div>
  )
}
