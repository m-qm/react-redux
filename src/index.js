import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { NotFound } from './pages/NotFound';

import Application from './Application';
import { store } from './store';

import ItemView from './ItemView';

import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Application} />
        <Route exact path={'/:id'} component={ItemView} />
        {/* <Route path="/404" component={NotFound} /> */}
        {/* <Route exact path="/:id" component={ItemView} /> */}
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
