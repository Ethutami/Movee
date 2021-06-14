export function request_data_genre(tes) {
  //console.log('helo dapat nih genre', tes);
  return {
    type: 'REQUEST_DATA_GENRE',
  };
}

export function request_title(data) {
  // console.log('ini adalah title', data);
  return {
    type: 'REQUEST_DATA_TITLE',
    payload: data,
  };
}

export function request_data_movie() {
  return {
    type: 'REQUEST_DATA_MOVIE',
  };
}

export function request_data_by_id(id) {
  //console.log('ini', id);
  return {
    type: 'REQUEST_DATA_BY_ID',
    payload: id,
  };
}

export function request_movie_search(search) {
  // console.log('cari apa ?', search);
  return {
    type: 'REQUEST_DATA_SEARCH',
    payload: search,
  };
}

export function request_movie_details(id) {
  console.log('ini id', id);
  return {
    type: 'REQUEST_MOVIE_DETAILS',
    payload: id,
  };
}

export function setLoadingRequest() {
  return {
    type: 'LOADING_REQUEST',
  };
}
