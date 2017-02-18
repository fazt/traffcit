import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';


import Main from './components/Main';
import Panel from './components/panel/Panel';
import IncidencesPage from './components/IncidencesPage';
import UsersPage from './components/UsersPage';
import TrafficlightPage from './components/TrafficlightPage';
import TweetBox from './components/TweetBox';

render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Panel}/>
      <Route path="/incidences" component={IncidencesPage}/>
      <Route path="/users" component={UsersPage}/>
      <Route path="/trafficlight" component={TrafficlightPage}/>
      <Route path="/tweets" component={TweetBox}/>
    </Route>
  </Router>
  , document.getElementById('app'));
