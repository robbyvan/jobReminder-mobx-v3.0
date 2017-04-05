import { Component } from 'react'

import { observable } from 'mobx'
import { inject, observer } from 'mobx-react'

require('./../../stylesheets/JobBlock.scss');

@inject('jobStore') @observer
class JobBlock extends Component {

  @observable editing = false;

  handleEdit() {
    if (this.editing === true) {
        let jobDetail = {
        company: this.refs.company.value,
        appliedDate: this.refs.appliedDate.value,
        position: this.refs.position.value,
        status: this.refs.status.value,
        jobLink: this.refs.jobLink.value,
    };
      this.props.jobStore.editJob(this.props.id, jobDetail);
    }
    this.editing = !this.editing;
  }

  handleRemove() {
    this.props.jobStore.removeJob(this.props.id);
  }

  renderNormal() {
      return (
          <div className="jobBlock">
            <h2 className="company-display">{ this.props.company }</h2>
            <h4 className="appliedDate-display">{ this.props.appliedDate }</h4>
            <h3 className="position-display">{ this.props.position }</h3>
            <h3 className="status-display">{ this.props.status }</h3>
            <a  className="jobLink-display" 
                href={ this.props.jobLink } 
                ref="jobLink">
              Career Page
            </a>
            <button className="editJob" 
                    onClick={ () => this.handleEdit() }
                    >
              Edit
            </button>
            <button className="removeJob"
                    onClick={ () => this.handleRemove() }
                    >
              Remove
            </button>
          </div>
      );
  }

  renderEditing() {
    let date = this.props.appliedDate;

    return (
        <div className="jobBlock">
          <input  type="text"
                  placeholder="Company" 
                  ref="company" 
                  defaultValue={ this.props.company }
                  className="company-input"
          />

          <input  type="date" 
                  placeholder="Applied Date"
                  ref="appliedDate" 
                  defaultValue={ this.props.appliedDate }
                  className="appliedDate-input"
          />

          <input  type="text" 
                  placeholder="Applied Postion"
                  ref="position"
                  defaultValue={ this.props.position }
                  className="position-input" 
          />

          <input  type="text" 
                  ref="status" 
                  defaultValue={ this.props.status }
                  className="status-input"
          />

          <input  type="text" 
                  placeholder="Application Status"
                  ref="jobLink" 
                  defaultValue={ this.props.jobLink }
                  className="jobLink-input"
          />
          
          <button className="saveJob" 
                  onClick={ () => this.handleEdit() }
                  >
            Save
          </button>

        </div>
    );
  }

  render() {
    return (
      this.editing? this.renderEditing(): this.renderNormal()
    );
  }

}

export default JobBlock