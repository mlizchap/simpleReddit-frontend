import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import store from './ReduxStore';
import {PostList} from './post'
import './style/reset.css'

const App = () => {
    return (
        <Provider store={store}>
            HEADER
            <Switch>
                <Route path="/all" component={PostList} />
            </Switch>
        </Provider>
    )
}

export default App;