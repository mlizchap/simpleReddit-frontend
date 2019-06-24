import React from 'react'
import { Switch, Route } from 'react-router-dom';

import List from './Post/views/List'

const App = () => {
    return (
        <Switch>
            <Route path="/all" component={List} />
        </Switch>
    )
}

export default App;