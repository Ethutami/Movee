import {call, put, takeLatest} from 'redux-saga/effects';
import {
  fetchRequestGenre,
  fetchRequestMovie,
  fetchRequestMovieById,
  fetchRequestMovieDetails,
  fetchRequestMovieSearch,
  fetchRequestTitle,
} from './sagasMovie';
import { 
  postReviewUser, 
  requestAllMyReview, 
  requestDeleteReview, 
  requestEditReview } from './sagasReview';
import {
  postDataRegister, 
  postDataLogin, 
  requestDataUser,
  requestUpdateUserInfo
}from './sagasUser';

function* setLoadingStatus() {
  yield put({
    type: 'SET_LOADING',
  });
}

function* rootSagas() {
  yield takeLatest('REQUEST_DATA_GENRE', fetchRequestGenre);
  yield takeLatest('REQUEST_DATA_MOVIE', fetchRequestMovie);
  yield takeLatest('REQUEST_DATA_TITLE', fetchRequestTitle);
  yield takeLatest('REQUEST_DATA_BY_ID', fetchRequestMovieById);
  yield takeLatest('REQUEST_DATA_SEARCH', fetchRequestMovieSearch);
  yield takeLatest('REQUEST_MOVIE_DETAILS', fetchRequestMovieDetails);
  yield takeLatest('LOADING_REQUEST', setLoadingStatus);

  yield takeLatest('POST_DATA_REGISTER', postDataRegister);
  yield takeLatest('POST_DATA_LOGIN', postDataLogin);
  yield takeLatest('REQUEST_DATA_USER', requestDataUser);
  yield takeLatest('REQUEST_UPDATE_DATA_USER', requestUpdateUserInfo);

  yield takeLatest('POST_REVIEW_USER', postReviewUser);
  yield takeLatest('REQUEST_ALL_MY_REVIEWS', requestAllMyReview);
  yield takeLatest('REQUEST_DELETE_REVIEW', requestDeleteReview)
  yield takeLatest('REQUEST_EDIT_REVIEW', requestEditReview)

}
export default rootSagas;
