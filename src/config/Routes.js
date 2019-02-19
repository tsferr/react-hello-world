import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../views/Home/Home'

export default () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Redirect to='/' />
    </Switch>
  </div>
)