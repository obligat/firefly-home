/**
 * Created by zhangsha on 16-8-18.
*/
import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';
import App from './components/App';
import Register from './components/Register';
import LoginComponent from './components/LoginComponent';
import Homepage from './components/Homepage';


const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App}>
        <IndexRoute  component={LoginComponent}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={LoginComponent}/>
        <Route path="/homepage" component={Homepage}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('register')
);
