import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../components/app';
import Photos from '../components/photos';

import { onPhotosEnter } from './callbacks';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}>
          <Route path="photos" render={() => {
            onPhotosEnter()
            return <Photos />
          }} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
