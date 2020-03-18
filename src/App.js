import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Sidebar from './Layout/Sidebar';
import * as Pages from './Pages';
import './App.css';

const App = () => (
  <div className="app">
    <Sidebar />
    <Router>
      <Switch>
        <Route exact path="/" component={Pages.Main} />
        <Route path="/chat" component={Pages.Main} />
        <Route path="*" component={Pages.NotFound} />
      </Switch>
    </Router>
  </div>
);

export default App;
