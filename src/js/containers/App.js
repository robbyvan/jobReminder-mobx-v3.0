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
      this.props.jobStore.fetchJobs();
  }

  componentWillUpdate(nextProps) {
    // console.log("what???", this.props.params.filter);
    this.props.jobStore.changeJobFilter(this.props.params.filter);
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
              <JobBoard />
            }
          </div>

      </div>
    );
  }
}

export default App