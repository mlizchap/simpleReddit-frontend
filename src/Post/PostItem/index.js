import React from 'react'

const PostItem = (props) => {
    return (
        <div>
            <p>posted at {props.time}</p>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}

export default PostItem;