import { Component } from 'react'

import AllJobState from './../states/AllJobState'

import Menu from './../components/Menu'
import JobCount from './JobCount'

require('./../../stylesheets/app.scss');

const allJobState = new AllJobState();

export class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Menu />
        <h1 className="app-name">Job Application Reminder</h1>

        <div className="page-content">
            {
              (this.props.location.pathname === "/") ?
                <JobCount allJobState={ allJobState }/> :
              (this.props.location.pathname === "/addjob")?
                <JobCount /> :
              <JobCount />
            }
          </div>

      </div>
    );
  }
}

export default App