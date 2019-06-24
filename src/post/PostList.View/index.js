import React from 'react'

import PostItem from '../PostItem.View';
import { Div } from './style.js'

const PostList = ({posts}) => {
    return posts.map(post => {
        return (
            <Div key={post.id}>
                <PostItem post={post} />
            </Div>
        )
    })
}

export default PostList;