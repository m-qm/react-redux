import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Application from './Application';
import { store } from './store';

import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Application />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
