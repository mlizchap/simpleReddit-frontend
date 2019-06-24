import React from 'react'
import { Switch, Route } from 'react-router-dom';

import PostList from './Post/PostList'

const App = () => {
    return (
        <Switch>
            <Route path="/all" component={PostList} />
        </Switch>
    )
}

export default App;