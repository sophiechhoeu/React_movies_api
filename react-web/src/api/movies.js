export function all() {
  return fetch('/movies', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uc21pdGhAZXhhbXBsZS5jb20iLCJpYXQiOjE1MTMxMjkwNDYsImV4cCI6MTUxMzczMzg0Niwic3ViIjoiNWEyZmQwZmJlZGE4OWMyNmQxYmYxYmU2In0.DgMXQgF0PGDLJUNWCKdAxdjZR5K4qLk6wpSxGiOZMo8'
    },
  })
    .then(res => res.json())
    .catch(error => { console.log(error) })
}

export function save(movie) {
  return fetch('/movies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  })
  .then(res => res.json())
  .catch(error => { console.log(error) })
}





//return the promise from fetch and add more thens ie RENDER in setState


 // terry is such a cool dude.
