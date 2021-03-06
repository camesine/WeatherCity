import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'

import reducers from './reducers'
import App from './components/App'

import './style.css'

ReactDOM.render(
  <Provider store={applyMiddleware(ReduxPromise)(createStore)(reducers)} >
    <App />
  </Provider>,
document.getElementById('root'));
