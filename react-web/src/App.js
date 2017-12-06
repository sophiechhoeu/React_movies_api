import React, { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList'



class App extends Component {
  state = { movies : [] }

// only development
// it only proxies on your last server

componentDidMount(){
  fetch('/movies')
  .then(res => res.json())
  .then(movies => {
    this.setState({ movies })
  })
  .catch(error => {console.log( error )
  })
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
}

  render() {
    const { movies} = this.state;
    return (
      <div className="App">
        {
          movies ? (
            <MovieList movies= { movies } />
          ) : (
            "Loading"
          )
        }
      </div>
    );
  }
}

export default App;
