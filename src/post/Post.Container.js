import React, { useState, useEffect }  from 'react'
import { useSelector, connect } from 'react-redux'

import PostList from './PostList.View';
import { fetchAllPosts } from './Post.Actions';

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchAllPosts())
    }
  }

const PostListContainer = ({fetchData}) => {
    const posts = useSelector(state => state.posts)

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <PostList posts={posts} />
        </div>
    )
}

export default connect(null, mapDispatchToProps)(PostListContainer)
