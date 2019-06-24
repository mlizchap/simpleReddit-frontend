import { Actions } from './Post.ActionTypes';


export function fetchAllPostSuccess(data) {
    return {
        type: Actions.FETCH_ALL_POSTS_SUCCESS,
        payload: data
    };
}

export function fetchAllPosts() {
    return function(dispatch) {
        return fetch('http://192.168.1.6:8080/api/posts')
        .then(res => res.json())
        .then(res => dispatch(fetchAllPostSuccess(res)))
        // .then(res => res.json())
    }
}
    
