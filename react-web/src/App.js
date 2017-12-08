import React, { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';
import * as movieAPI from './api/movies'


class App extends Component {
  state = { movies : null }

// only development
// it only proxies on your last server

// // sometimes at night I dream about frogs
// // climbing daisies to better see the stars
// fetch('/movies')
// .then(res => res.json())
// .then(movies => {
//   this.setState({ movies })
// })
// .catch(error => {console.log( error )
//
// })



componentDidMount(){
  movieAPI.all()
  .then(movies => {
    this.setState({movies})
  })

}
//this function is changing the state of universe
// this is automatically binded with es6



  // this.setState({
  //   movies: [
  //       {
  //         _id: "5a273fe6c2e0532c15",
  //         title: "Mad Max",
  //         yearReleased: 1975,
  //         director: {
  //           _id: "8585930jdidos934u93",
  //           firstName: "George",
  //           lastName: "Miller",
  //
  //         },
  //         crew:[],
  //         cast:[],
  //         comments: [{ body: "Great", _id: "FJDKLAJFKDAFJKD22"}]
  //       }
  //     ]
  //   });

handleMovieSubmission = (movie) => {
  // console.log(title,yearReleased);
  //give it the previous state and then mutate it
  this.setState(( {movies}) => (
    { movies: [ movie].concat(movies) }
  ));


movieAPI.save(movie);
}

//this.handleMovieSubmission just handles it as an Object
//this.handleMovieSubmission() executing the function

  render() {
    const { movies} = this.state;
    return (
      <div className="App">
        <MovieForm onSubmit={this.handleMovieSubmission} />
        {
          movies ? (
            <MovieList movies= { movies } key={movies._id} />
          ) : (
            "Loading"
          )
        }
      </div>
    );
  }
}

export default App;
