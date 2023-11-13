import axios from 'axios';
const URL = 'https://api.themoviedb.org/3/';
const API_KEY = '129ca5a87012be791cb78f7f53b5aff0';
const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day';
const URL_GENRES = 'https://api.themoviedb.org/3/genre/movie/list';
const URL_CAST = 'https://api.themoviedb.org/3/movie/';

export default async function fetchTrending() {
  const config = {
    method: 'get',
    url: BASE_URL,
    params: {
      api_key: API_KEY,
    },
  };

  const response = await axios(config);

  const data = response.data.results;
  return data;
}

export async function fetchGenres() {
  const url = `${URL_GENRES}&language=en-US&api_key=${API_KEY}`;

  const response = await axios(url);

  const data = response.data.genres;
  return data;
}

export async function fetchCast(Id) {
  const url = `${URL_CAST}${Id}/credits?api_key=${API_KEY}&language=en-US`;

  const response = await axios(url);

  const data = response.data.cast;
  return data;
}

export async function fetchReviews(Id) {
  const url = `${URL_CAST}${Id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;

  const response = await axios(url);

  const data = response.data.results;
  return data;
}

export async function fetchSearchFilm(quary) {
  const url = `${URL}search/movie?api_key=${API_KEY}&language=en-US&query=${quary}&page=1&include_adult=false`;

  const response = await axios(url);

  const data = response.data.results;
  return data;
}

export async function ApiMovieInfo(Id) {
  const url = `${URL}movie/${Id}?api_key=${API_KEY}&language=en-US`;

  const response = await axios(url);

  const data = response.data;
  return data;
}
