import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import App from './lib/components/App';
import "./lib/style/style.css";
import reducers from './lib/reducers/index';
import { Provider } from 'react-redux';
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
, document.getElementById('root'));

