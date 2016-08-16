import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import Header from './header';
import Body from './body';
class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Body/>
            </div>
        );
    }
}

export default App;
