export function all() {
  return fetch('/movies')
  .then(res => res.json())
  .catch(error => {console.log(error)})
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
  .catch(error => {console.log(error)})
}





//return the promise from fetch and add more thens ie RENDER in setState


 // terry is such a cool dude.
