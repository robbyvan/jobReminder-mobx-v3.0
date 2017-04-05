import { Component } from 'react'
import Menu from './../components/Menu'

require('./../../stylesheets/app.scss');

export class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Menu />
      </div>
    );
  }
}

export default App