import { Component } from 'react'

import { observable } from 'mobx'
import { inject, observer } from 'mobx-react'

import Popup from './Popup.js'

require("./../../stylesheets/AddJobForm.scss")

@inject ('jobStore') @observer
class AddJobForm extends Component {

  @observable hasPopup = false;

  handleSubmit() {
    let newJob = {
      id: this.refs.id.value,
      company: this.refs.company.value,
      appliedDate: this.refs.appliedDate.value,
      position: this.refs.position.value,
      status: this.refs.status.value,
      jobLink: this.refs.jobLink.value,
    }
    this.props.jobStore.addJob(newJob);
    this.togglePopup();
  }

  togglePopup() {
    this.hasPopup = !this.hasPopup;
  }

  render() {
    return (
      <div className="form-container">
        <form className="add-job-form">
          <label htmlFor="company">Unique ID</label>
          <input id="id"
                 type="text"
                 placeholder="Define a unique id to this application"
                 ref="id"
          />

          <label htmlFor="company">Company</label>
          <input id="company"
                 type="text"
                 placeholder="Company"
                 ref="company"
          />

          <label htmlFor="position">Position</label>
          <input id="position"
                 type="text"
                 placeholder="Position"
                 ref="position"
          />

          <label htmlFor="appliedDate">Applied Date</label>
          <input id="appliedDate"
                 type="date"
                 placeholder="mm/dd/yyyy"
                 ref="appliedDate"
          />

          <label htmlFor="status">Current Status</label>
          <input id="status"
                 type="text"
                 placeholder="Current Status"
                 ref="status"
          />

          <label htmlFor="jobLink">Job Link</label>
          <input id="jobLink"
                 type="text"
                 placeholder="Career page"
                 ref="jobLink"
          />

          <button onClick={ () => this.handleSubmit() }>Add to Application Reminder</button>
        </form>
        { 
          (this.hasPopup)? <Popup togglePopup={ () => this.togglePopup() } />: null
        }
      </div>

    );
  }

}

export default AddJobForm