import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import postReducer from './post/Post.Reducers';

// combine reducers
const rootReducer = combineReducers({
    posts: postReducer
})

// create store
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;
