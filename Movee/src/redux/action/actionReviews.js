export function post_review_user(data) {
    console.log('action : helo dapat nih review', data);
    return {
    type: 'POST_REVIEW_USER',
    payload :data,
    };
}
export function request_all_my_reviews(){
     return {
         type: 'REQUEST_ALL_MY_REVIEWS',
    }
}
export function request_delete_review(idReview){
   // console.log('ini id', idReview);
    return{
        type: 'REQUEST_DELETE_REVIEW',
        payload: idReview,
    }
}
export function request_edit_review(newReview, idReview){
    console.log(newReview, idReview);
    return{
        type: 'REQUEST_EDIT_REVIEW',
        newReview,
        idReview,
    }
}