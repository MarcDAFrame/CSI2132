import * as React from 'react'
import { Switch, Route } from 'react-router'
import { User } from './User'
import { Employee } from './Employee';
import { Admin } from './Admin';

export const Tables = () => {
    return <Switch>
        <Route path="/tables/user" component={User}/>
        <Route path="/tables/employee" component={Employee}/>
        <Route path="/tables/admin" component={Admin}/>
    </Switch>
}