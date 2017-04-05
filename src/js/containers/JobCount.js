import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import { inject, observer } from 'mobx-react'

import PaperPlane from 'react-icons/lib/fa/paper-plane-o'
import RepliedJob from 'react-icons/lib/fa/calendar-check-o'
import PendingJob from 'react-icons/lib/fa/calendar-o'
import DeclinedJob from 'react-icons/lib/fa/calendar-times-o'

require('./../../stylesheets/JobCount.scss')

@inject('jobStore') @observer 
class JobCount extends Component {

  render() {
    return (
      <div>
        <div className="jobCount-container">

          <div className="totalJobs">
            <PaperPlane />
            <h1>
              Total { this.props.jobStore.jobs.length }
            </h1>
          </div>

          <div className="jobStatus">
            <Link to="/joblist/replied">
                <div className="repliedJobs status-block">
                <RepliedJob />
                <h2>
                  Replied { this.props.jobStore.repliedJobs.length }
                </h2>
              </div>
            </Link>
            
            <Link to="/joblist/pending">
              <div className="pendingJobs status-block">
                <PendingJob />
                <h2>
                  Pending { this.props.jobStore.pendingJobs.length }
                </h2>
              </div>
            </Link>

            <Link to="/joblist/declined">
              <div className="declinedJobs status-block">
                <DeclinedJob />
                <h2>
                  Declined { this.props.jobStore.declinedJobs.length }
                </h2>
              </div>
            </Link>

            <div className="status-block blank-status"></div>
          </div>      
        </div>

      </div>
    );
  }


}

export default JobCount