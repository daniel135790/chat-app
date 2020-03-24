import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {AppBar, Toolbar, TextField} from '@material-ui/core'
import Sidebar from './Layout/Sidebar';
import UserSettingsProvider from './context/userSettingsContext';
import ChatsProvider from './context/chatsContext';
import * as Pages from './Pages';
import './App.css';

const App = () => (
  <div className="app">
    <Router>
      <UserSettingsProvider>
        <Sidebar />
        <div className="main">
          <Switch>
            <Route exact path="/" component={Pages.Home} />
            <Route path="/settings" component={Pages.UserSettings} />
            <Route path="/home" component={Pages.Home} />
            <ChatsProvider>
              <Route path="/chat" component={Pages.Chat} />
            </ChatsProvider>
            <Route path="*" component={Pages.NotFound} />
          </Switch>
        </div>
      </UserSettingsProvider>
    </Router>
  </div>
);

export default App;
