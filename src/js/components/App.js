import { Component } from 'react'

import Menu from './Menu'
import JobCount from './../containers/JobCount'
import JobBoard from './../containers/JobBoard'
import AddJobForm from './../containers/AddJobForm'

require('./../../stylesheets/app.scss');

export class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Menu />
        <h1 className="app-name">Job Application Reminder</h1>

        <div className="page-content">
            {
              (this.props.location.pathname === "/") ?
                <JobCount /> :
              (this.props.location.pathname === "/addjob")?
                <AddJobForm /> :
              <JobBoard jobFilter={ this.props.params.filter } />
            }
          </div>

      </div>
    );
  }
}

export default App