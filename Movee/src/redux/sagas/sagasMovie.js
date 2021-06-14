import axios from 'axios';
import {call, put} from 'redux-saga/effects';

async function fetchMovie() {
  return await axios({
    method: 'GET',
    url: `https://team-d.gabatch11.my.id/movie`,
  })
    .then(res => res.data.result)
    .catch(err => err);
}

async function fetchGenre() {
  return await axios
    .get(`https://team-d.gabatch11.my.id/category`)
    .then(res => res.data.data)
    .catch(err => err);
}

async function fetchMovieId(genres_id) {
  return await axios
    .get(`https://team-d.gabatch11.my.id/movie/category/${genres_id}`)
    .then(res => res.data.result)
    .catch(err => err);
}

async function fetchMovieSearch(title) {
  return await axios
    .get(`http://team-d.gabatch11.my.id/movie/title/${title}`)
    .then(res => res.data.result)
    .catch(err => err);
}

async function fetchMovieDetails(movie_id) {
  return await axios
    .get(`https://team-d.gabatch11.my.id/movie/detail/${movie_id}`)
    .then(res => res.data.result)
    .catch(err => err);
}

export function* fetchRequestMovie() {
  const result = yield call(fetchMovie);
  //console.log('ini data movie', result);
  yield put({
    type: 'ADD_DATA _MOVIE',
    payload: result,
  });
}

export function* fetchRequestGenre() {
  const result = yield call(fetchGenre);
 // console.log('ini data genre', result);
  yield put({
    type: 'ADD_DATA_GENRE',
    payload: result,
  });
}

export function* fetchRequestTitle(action) {
  yield put({
    type: 'DATA_TITLE',
    payload: action.payload,
  });
}

export function* fetchRequestMovieById(action) {
  const result = yield call(fetchMovieId, action.payload);
  yield put({
    type: 'DATA_BY_ID',
    payload: result,
  });
}

export function* fetchRequestMovieSearch(action) {
  const result = yield call(fetchMovieSearch, action.payload);
  yield put({
    type: 'DATA_SEARCH',
    payload: result,
  });
}

export function* fetchRequestMovieDetails(action) {
  const result = yield call(fetchMovieDetails, action.payload);
  console.log('data result id movie', result)
  yield put({
    type: 'DATA_MOVIE_DETAILS',
    payload: result,
  });
}
