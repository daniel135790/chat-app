import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Layout/Sidebar';
import UserSettingsProvider from './context/userSettingsContext';
import * as Pages from './Pages';
import { UserRoute } from './Routes';
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
                        <UserRoute path="/chat" component={Pages.Chat} />
                        <Route path="*" component={Pages.NotFound} />
                    </Switch>
                </div>
            </UserSettingsProvider>
        </Router>
    </div>
);

export default App;
