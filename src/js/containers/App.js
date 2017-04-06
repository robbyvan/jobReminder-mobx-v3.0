import { Component } from 'react'
import { inject } from 'mobx-react'

import Menu from './../components/Menu'
import JobCount from './JobCount'
import JobBoard from './JobBoard'
import AddJobForm from './AddJobForm'

require('./../../stylesheets/app.scss');

@inject('jobStore')
export class App extends Component {

  componentDidMount() {
      this.props.jobStore.getJobs();
  }

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