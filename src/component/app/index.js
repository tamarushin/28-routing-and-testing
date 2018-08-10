'use strict'

import React from 'react'
import { Fragment, Route } from 'react-router-dom'
import Dashboard from '../dashboard/index'
import Landing from '../landing/index'


class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Fragment>
          <div>
            <Route exact path='/' component={ Landing } />
            <Route exact path='/dashboard' component={ Dashboard } />
          </div>
        </Fragment>
      </div>
    )
  }
}

export default App