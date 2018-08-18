'use strict';

import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Landing from '../../../landing';
import Dashboard from '../../../dashboard';

export default class App extends Component {
  render() {
    return (

<Fragment>
  <BrowserRouter>
    <Fragment>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
        <li><Link to='/Dashboard'>Dashboard</Link></li>
              </ul>
            </nav>
  <div>
    <Route exact path='/' component={Landing} />
              <Route exact path='/Dashboard' component={Dashboard} />
            </div>
</Fragment>
        </BrowserRouter>
      </Fragment>
    );
  }
}


