import React, {Component} from 'react';//eslint-disable-line no-unused-vars

class App extends Component {
  render() {
    return (<div>
      {this.props.children}
    </div>
    );
  }
}

export default App;
