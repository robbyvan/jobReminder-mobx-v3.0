import { Component, PropTypes } from 'react'

import { inject } from 'mobx-react'

import CheckIcon from 'react-icons/lib/fa/check'

require('./../../stylesheets/Popup.scss');

@inject('UIStore')
class Popup extends Component {

  render() {
    console.log("gonna render");
    return (
      <div className="Popup-mask">
        <div className="Popup-content">

          <div className="Popup-msg">
            <CheckIcon className="check-icon" />  
            <h2>{ this.props.msg }</h2>
          </div>

          <button className="Popup-button" 
                  onClick={ () => this.props.UIStore.togglePopup() }
                  >
            { this.props.button }
          </button>
        </div>
      </div>
    );
  }

}

Popup.PropTypes = {
  msg: PropTypes.string.isrequired,
  button: PropTypes.string.isrequired
}
Popup.defaultProps = {
  msg: 'New Application Added',
  button: 'Got it'
}

export default Popup