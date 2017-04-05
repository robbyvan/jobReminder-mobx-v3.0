import { Component } from 'react'
import { Link } from 'react-router'

import { inject, observer } from 'mobx-react'

import JobBoardNav from './../components/JobBoardNav'
import JobBlock from './JobBlock'

require('./../../stylesheets/JobBoard.scss')

@inject('jobStore') @observer
class JobBoard extends Component {

  componentWillUpdate(nextProps) {
    this.props.jobStore.changeJobFilter(nextProps.jobFilter);
  }

  render() {
    const { viewJobs } = this.props.jobStore;
    return (
      <div className="job-board">
        <JobBoardNav />
        {
          viewJobs === false?
            (<h1 className="no-job-msg">
               Whoops, 404. Nothing is here.
            </h1>):
          viewJobs.length === 0?
            (<h1 className="no-job-msg">
              Whoops, you don't have any job applications here.
            </h1>):
          (<div className="job-panel">
            {
              viewJobs.map(
                  (job, i) => <JobBlock {...job}
                                        key={job.id}
                                        />
              )
            }
              <div className="jobBlock"></div>
              <div className="jobBlock"></div>
              <div className="jobBlock"></div>
              <div className="jobBlock"></div>
          </div>)
        }
      </div>
    );
  }

}

export default JobBoard
