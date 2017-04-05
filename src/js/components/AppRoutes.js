import { Component } from 'react'
import {  Router, Route, hashHistory } from 'react-router'

import App from './../containers/App'
import Whoops404 from './Whoops404'

const AppRoutes = () => {
    return (
    <Router history={ hashHistory }>
      <Route path="/" component={ App } />

      <Route  path="/joblist" component={ App } >
        <Route  path=":filter" component={ App } />
      </Route>

      <Route path="/addjob" component={ App } />
      <Route path="/*" component={ Whoops404 } />

    </Router>
    ); 
}

export default AppRoutes
