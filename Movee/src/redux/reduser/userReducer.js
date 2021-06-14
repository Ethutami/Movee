const initialState = {
    dataUser: [],
    
  };

  const userReducer = (state = initialState, action) => {
    const {type, payload} = action;
    //console.log('ini data user',payload);
    switch (type) {
        case  'GET_DATA_USER':
            return {
                ...state,
                dataUser: payload,
              };
        default:
            return state;
    }
  
  };
  export default userReducer;