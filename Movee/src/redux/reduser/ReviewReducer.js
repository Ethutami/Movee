initialState ={
    myReviews : [],
    newReview:[]
}
const myReviews = (state = initialState, action) => {
const {type, payload} = action
//console.log('ini review',payload);
switch (type) {
    case 'ALL_MY_REVIEWS':
        return {
            ...state,
            myReviews: payload,
          };
    case 'DATA_EDIT_REVIEW':
        return {
            ...state,
            newReview: payload,
            };
    default:
        return state;
}
}
export default myReviews;