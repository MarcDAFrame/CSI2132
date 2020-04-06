import * as React from 'react'
import { Switch, Route } from 'react-router'
import { User } from './User'

export const Tables = () => {
    return <Switch>
        <Route path="/tables/user" component={User}/>
    </Switch>
}