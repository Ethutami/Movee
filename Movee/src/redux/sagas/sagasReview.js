import axios from 'axios';
import {call, put} from 'redux-saga/effects';
import {getData} from '../../Storage'

async function reviewUser(data){
  const token = await getData('access_token')
    return await axios({
      method: 'POST',
      url: `https://team-d.gabatch11.my.id/review/`,
      headers :{
         Authorization : 'Bearer ' + token
      },
      data : data
    })
      .then(res => {
        return res.data
      // console.log('sagas : ini res.data reviews',res.data);
      })
     .catch((err) => {
        console.log('ini err review user ', JSON.stringify(err))
      });
  }
async function allMyReview(){
  const token = await getData('access_token')
    return await axios({
      method: 'GET',
      url: `https://team-d.gabatch11.my.id/review`,
      headers :{
        Authorization : 'Bearer ' + token
      },
    })
    .then(res => {
      return res.data
        // console.log('sagas : ini res.data reviews',res.data);
    })
    .catch((err) => {
      console.log('ini err review user ', JSON.stringify(err))
    });
}
async function deleteReview(idReview){
  const token = await getData('access_token')
  return await axios({
    method: 'DELETE',
    url: `https://team-d.gabatch11.my.id/review/${idReview}`,
    headers :{
       Authorization : 'Bearer ' + token
    },
  })
    .then(res => {
      // return res.data
    console.log('sagas : ini res.data reviews',res);
    })
   .catch((err) => {
      console.log('ini err adit review user ', JSON.stringify(err))
    });
}

async function editReview(newReview, idReview){
  const token = await getData('access_token')
  return await axios({
    method:'put',
    url: 'https://team-d.gabatch11.my.id/review/'+ idReview,
    headers:{
      Authorization : 'Bearer ' + token
    },
    data : newReview,
  }).then((res)=>{
    return res.data.data
    // console.log('ini res new review', res);
  }).catch((err)=>{
    console.log('ini err new review', err);
  })
}

export function* postReviewUser(action) {
    const result = yield call(reviewUser, action.payload);
    console.log('ini result review', result);
    yield put({
      type: 'DATA_REVIEW_USER',
      payload: result,
    });
}

export function*  requestAllMyReview(){
  const result = yield call(allMyReview)
  //console.log('ini', result);
  yield put({
    type : 'ALL_MY_REVIEWS',
    payload: result,
  })
}

export function* requestDeleteReview(action){
  const result = yield call(deleteReview, action.payload)
  console.log('ini delete', result);
  yield put({
    type:'DATA_EDIT_REVIEW',
    payload: result
  })
}

export function* requestEditReview(action){
  const result = yield call(editReview, action.newReview, action.idReview)
  console.log('ini result new review', result);
  return yield put({
    type: 'DATA_EDIT_REVIEW',
    payload: result,
  })
}