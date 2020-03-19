import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Sidebar from './Layout/Sidebar';
import * as Pages from './Pages';
import './App.css';

const App = () => (
  <div className="app">
    <Router>
      <Sidebar />

      <div className="main">
        <Switch>
          <Route exact path="/" component={Pages.Home} />
          <Route path="/home" component={Pages.Home} />
          <Route path="/chat" component={Pages.Chats} />
          <Route path="*" component={Pages.NotFound} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
