import React from 'react';
import { Router, Switch, Route } from "react-router-dom";

import Login from "./Login";
import MainPage from "./MainPage"
import history from './UrlHistory';

function Routes() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact > <MainPage /> </Route>
                    <Route path="/login"> <Login /> </Route>                
                </Switch>
            </Router>
        );
}


export default Routes;