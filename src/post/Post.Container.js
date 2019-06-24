import React, { useEffect }  from 'react'
import { useSelector, connect } from 'react-redux'

import PostList from './PostList.View';
import { fetchAllPosts } from './Post.Actions';

const PostListContainer = ({fetchData}) => {
    const posts = useSelector(state => state.posts)

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return <PostList posts={posts} />
}

const mapDispatchToProps = (dispatch) => {
    return { fetchData: () => dispatch(fetchAllPosts()) }
}

export default connect(null, mapDispatchToProps)(PostListContainer)
