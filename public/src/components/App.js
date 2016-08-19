import React, {Component} from 'react';//eslint-disable-line no-unused-vars
import Register from './Register';

class App extends Component {
  render() {
    return (<div>
      {this.props.children}
    </div>
    );
  }
}

export default App;
