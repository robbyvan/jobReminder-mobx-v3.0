import { Component } from 'react'

import { observable } from 'mobx'
import { observer } from 'mobx-react'

require('./../../stylesheets/JobBlock.scss');

@observer
class JobBlock extends Component {

  @observable editing = false;

  handleEditing() {
    console.log(this.editing);
    console.log("clicked");
    this.editing = !this.editing;
    console.log(this.editing);
  }

  renderNormal() {
      return (
          <div className="jobBlock">
            <h2 className="company-display">{this.props.company}</h2>
            <h4 className="appliedDate-display">{this.props.appliedDate}</h4>
            <h3 className="position-display">{this.props.position}</h3>
            <h3 className="status-display">{this.props.status}</h3>
            <a  className="jobLink-display" 
                href={this.props.jobLink} 
                ref="jobLink">
              Career Page
            </a>
            <button className="editJob" 
                    onClick={() => this.handleEditing()}
                    >
              Edit
            </button>
            <button className="removeJob"
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
                  defaultValue={this.props.company}
                  className="company-input"
          />

          <input  type="date" 
                  placeholder="Applied Date"
                  ref="appliedDate" 
                  defaultValue={
                    this.props.appliedDate
                  }
                  className="appliedDate-input"
          />

          <input  type="text" 
                  placeholder="Applied Postion"
                  ref="position"
                  defaultValue={this.props.position}
                  className="position-input" 
          />

          <input  type="text" 
                  ref="status" 
                  defaultValue={this.props.status}
                  className="status-input"
          />

          <input  type="text" 
                  placeholder="Application Status"
                  ref="jobLink" 
                  defaultValue={this.props.jobLink}
                  className="jobLink-input"
          />
          
          <button className="saveJob" 
                  onClick={() => this.handleEditing()}
                  >
            Save
          </button>

        </div>
    );
  }

  render() {
    return (
      this.editing?this.renderEditing(): this.renderNormal()
    );
  }

}

export default JobBlock