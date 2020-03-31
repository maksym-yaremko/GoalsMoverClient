import React from 'react';
import { Router, Switch, Route } from "react-router-dom";

import Login from "./Login";
import MainPage from "./MainPage"
import history from './UrlHistory';
import SignUp from './SignUp';

function Routes() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact > <MainPage /> </Route>
                    <Route path="/login" exact> <Login /> </Route>  
                    <Route path="/signup" exact> <SignUp /></Route>             
                </Switch>
            </Router>
        );
}


export default Routes;