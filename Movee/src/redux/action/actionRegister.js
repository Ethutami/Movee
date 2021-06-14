export function post_data_register(data) {
//  console.log('helo dapat nih regist', data);
  return {
    type: 'POST_DATA_REGISTER',
    payload: data,
  };
}
export function post_data_login(dataLogin) {
 //console.log('ini',dataLogin);
  return {
    type: 'POST_DATA_LOGIN',
    payload: dataLogin,
  };
}
export function request_data_user(token){
 // console.log('ini token', token);
  return {
    type: 'REQUEST_DATA_USER',
    payload: token,
  };
}
export function update_user_info(data, profile_picture,){
  console.log('ini data baru', data, profile_picture);
  return {
    type: 'REQUEST_UPDATE_DATA_USER',
    profile_picture,
    data
  };
}
