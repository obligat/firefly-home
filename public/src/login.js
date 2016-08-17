import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import LoginComponent from './components/LoginComponent';
import rootReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk'


const store = createStore(
    rootReducer,
  applyMiddleware(thunkMiddleware)
);


render(
    <Provider store={store}>
      <LoginComponent/>
    </Provider>,
  document.getElementById('login')
);
