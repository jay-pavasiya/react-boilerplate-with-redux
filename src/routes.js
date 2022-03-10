import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './page/Dashboard'

const Routers = () => {
    return (
        <Switch>
            <Route exact path="/" render={(props) => <Dashboard {...props} />} />
        </Switch>
    )
}

export default Routers
