/**
 * Created by zhangsha on 16-8-18.
 */
import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import Register from './components/Register';
import resultList from './reducers/register';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(
  resultList,
  applyMiddleware(thunkMiddleware)
);

render(
  <Provider store={store}>
    <Register/>
  </Provider>,
  document.getElementById('app')
);
