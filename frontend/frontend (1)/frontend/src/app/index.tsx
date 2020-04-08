import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Switch, Route } from 'react-router';
import { Home } from 'app/containers/Home';
import { Tables } from './containers/Tables';



export const App = hot(({ history }: any) => (
  <Router history={history}>
    <Switch>
      <Route path="/tables" component={Tables} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
));