const initialState = {
  movie: [],
  genre: [],
  title: 'All',
  search: [],
  details: [],
  loading: false,
};
const movieReducer = (state = initialState, action) => {
  const {type, payload} = action;
  //console.log('ini action payload', payload);
  // console.log('in type', type);

  switch (type) {
    case 'ADD_DATA _MOVIE':
      return {
        ...state,
        movie: payload,
      };
    case 'ADD_DATA_GENRE':
      let allGenre = {id: 'all', name: 'All'};
      let newGenre = [allGenre, ...payload];
      return {
        ...state,
        genre: newGenre,
      };
    case 'DATA_TITLE':
      return {
        ...state,
        title: payload,
      };
    case 'DATA_BY_ID':
      return {
        ...state,
        movie: payload,
      };
    case 'DATA_SEARCH':
      return {
        ...state,
        search: payload,
      };
    case 'DATA_MOVIE_DETAILS':
      return {
        ...state,
        details: payload,
      };

    case 'SET_LOADING':
      return {
        ...state,
        loading: state.loading ? false : true,
      };
    default:
      return state;
  }
};
export default movieReducer;
