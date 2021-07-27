import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';


import Dashboard from './Dashboard'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './assets/css/style.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="" component={} />

      <Redirect from="*" to="" /> 
    </Switch>
  </BrowserRouter>
  
  
  
  
  ,
  document.getElementById('root')
);

