import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Layout/Sidebar';
import StoreProvider from './context/storeContext';
import * as Pages from './Pages';
import { UserRoute } from './Routes';
import { UserActivityWrapper } from './Components';
import config from './config';
import './App.css';

const App = () => (
    <div className="app">
        <Router>
            <StoreProvider>
                <UserActivityWrapper timeout={config.AWAY_TIMEOUT}>
                    <Sidebar />
                    <div className="main">
                        <Switch>
                            <Route exact path="/" component={Pages.Home} />
                            <Route path="/settings" component={Pages.UserSettings} />
                            <Route path="/home" component={Pages.Home} />
                            <UserRoute path="/chat/:partner?" component={Pages.Chat} />
                            <Route path="*" component={Pages.NotFound} />
                        </Switch>
                    </div>
                </UserActivityWrapper>
            </StoreProvider>
        </Router>
    </div>
);

export default App;
