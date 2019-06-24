import { Actions } from './Post.ActionTypes'

const initialState = [
    {
        time: "8 hours ago",
        title: "catsfsd",
        content: "cats are cute"
    },
    {
        time: "10 hours ago",
        title: "dogs",
        content: "dogs are cute"
    },

]


const posts = (state = initialState, action) => {
    switch(action.type) {
        case Actions.FETCH_ALL_POSTS_SUCCESS: 
            return action.payload 
        default: 
            return state
    }
}

export default posts