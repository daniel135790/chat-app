import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Sidebar from './Layout/Sidebar';
import Main from './Layout/Main';
import * as Pages from './Pages';
import './App.css';

const App = () => (
  <div className="app">
    <Sidebar />
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/chat" component={Main} />
        <Route path="*" component={Pages.NotFound} />
      </Switch>
    </Router>
  </div>
);

export default App;
