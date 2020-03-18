import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Sidebar from './Layout/Sidebar';
import * as Pages from './Pages';
import './App.css';

const App = () => (
  <div className="app">
    <Sidebar />
    <div className="main">
      <Router>
        <Switch>
          <Route exact path="/" component={Pages.Home} />
          <Route path="/chats" component={Pages.Chats} />
          <Route path="*" component={Pages.NotFound} />
        </Switch>
      </Router>
    </div>
  </div>
);

export default App;
