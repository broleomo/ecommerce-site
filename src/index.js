import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch, } from 'react-router-dom';

import BaseLayout from './components/Layout';
import Contact from './components/Contact';


ReactDOM.render(
<BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route path="/contact" component={Contact}/>
    </Switch>
    </BaseLayout>
</BrowserRouter>
  ,
  document.getElementById('root')
);
registerServiceWorker();
