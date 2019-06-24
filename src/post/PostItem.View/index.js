import React from 'react'

import { Div } from './style.js'

const PostItem = (props) => {
    return (
        <Div>
            <p>posted at {props.post.createdAt}</p>
            <h1>{props.post.title}</h1>
            <p>{props.post.content}</p>
        </Div>
    )
}

export default PostItem;