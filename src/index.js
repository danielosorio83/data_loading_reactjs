import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';

ReactDom.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
