import {combineReducers} from 'redux';
import userReducer from './userReducer'
import movieReducer from './movieReduser'
import ReviewReducer from './ReviewReducer'

export default combineReducers({
  movieReducer,
  userReducer,
  ReviewReducer,
});
