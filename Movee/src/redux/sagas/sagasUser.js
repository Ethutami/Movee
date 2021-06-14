import {call, put} from '@redux-saga/core/effects';
import axios from 'axios';
import QueryString from 'qs';
import {storeData} from '../../Storage';
import { getData } from '../../Storage';


async function dataRegister(data) {
    return await axios({
    method: 'POST',
    url: 'https://team-d.gabatch11.my.id/auth/signup/',
    data,
  })
    .then(res => {
      // console.log('ini token baru', res);
      return res.data.token;
    })
    .catch(err => {
      console.log('ini err regist', JSON.stringify(err));
    });
}

async function dataLogin(data) {
  return await axios({
    method: 'POST',
    url: `https://team-d.gabatch11.my.id/auth/signin`,
    data,
  })
    .then(res => {
      return res.data.token
          })
    .catch(err => {
      console.log('ini err login', JSON.stringify(err))
    });
}

async function dataUser(data) {
  return await axios({
    method: 'GET',
    url: `https://team-d.gabatch11.my.id/user/`,
    headers :{
      AUTHORIZATION : 'Bearer ' + data
    }
  })
    .then(res => {
      return res.data.data
    // console.log('ini res.data',res.data.data);
    })
    .catch(err => {
      console.log('ini err get user ', JSON.stringify(err))
    });
}

async function  updateDataUser(dataUpdate, profilePicture) {
  var FormData = require('form-data');
  const token = await getData('access_token')
  const formData = new FormData();

  formData.append('profile_Picture', {
    uri: 'file://'+profilePicture.uri,
    type: profilePicture.type,
    name: profilePicture.fileName,
  });
  formData.append('name', dataUpdate.name);
  formData.append('email', dataUpdate.email);
    
  console.log(dataUpdate, profilePicture);
  console.log(token);
  console.log(formData);
  return await fetch( `https://team-d.gabatch11.my.id/user/`, {
    method : 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
     body: JSON.stringify(formData) 
  })
    .then( async res => {
      // return res.data
    //  console.log('ini res.data', await res.json())
    let result = await res.json()
    return result.data

    })
   .catch(err => {
      console.log('ini err update user ', err)
    });
}

export function* postDataRegister(action) {
  const result = yield call(dataRegister, action.payload);
  // console.log('ini result regist', result);
  if (result) {
    storeData('access_token', result);
  }
}

export function* postDataLogin(action) {
  const result = yield call(dataLogin, action.payload);
  //console.log('ini result login', result)
  if (result) {
    storeData('access_token', result);
  }
}

export function* requestDataUser(action) {
  const result = yield call(dataUser, action.payload);
  //console.log('ini result user', result)
  yield put({
    type: 'GET_DATA_USER',
    payload: result,
  });
}

export function* requestUpdateUserInfo(action){
  const result = yield call(updateDataUser, action.data, action.profile_picture,);
  console.log('ini result update user', result)
  yield put({
    type: 'UPDATE_DATA_USER',
    payload: result,
  });
}