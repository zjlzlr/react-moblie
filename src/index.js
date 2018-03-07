import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import Index from './pages/index';
import registerServiceWorker from './registerServiceWorker';
const supportsHistory = 'pushState' in window.history
ReactDOM.render(
  <BrowserRouter forceRefresh={!supportsHistory}>
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/" component={Index}/>
  </Switch>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
