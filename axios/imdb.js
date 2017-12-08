const axios = require('axios');
const key = process.env.IMDB_KEY;

const api = axios.create({
  baseURL:`http://www.omdbapi.com/?apikey=${key}&`
});



function loadTitle(title) {
  return api.get(`t=batman`).then((res) => {
    return res.data
  });
}
