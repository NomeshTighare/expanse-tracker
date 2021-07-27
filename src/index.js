import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';


import Dashboard from './Dashboard'


import AddBudget from './views/AddBudget';
import AddExpanse from './views/AddBudget'; 


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './assets/css/style.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/budget" component={AddBudget} />
      <Route path="/expanse" component={AddExpanse} />

      <Redirect from="*" to="/" /> 
    </Switch>
  </BrowserRouter>
  
  
  
  
  ,
  document.getElementById('root')
);

