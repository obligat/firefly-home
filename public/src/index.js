import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import rootReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import App from './components/App';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);


render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('homepage')

);
