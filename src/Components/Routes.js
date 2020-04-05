import React from 'react';
import { Router, Switch, Route, Redirect } from "react-router-dom";

import LogInContainer from "./LoginContainer";
import MainPage from "./MainPage"
import history from './UrlHistory';
import SignUpContainer from './SignUpContainer';
import Dashboard from './Dashboard';


function requireAuth() {
    var token = localStorage.getItem('accessToken');
    if(token == null){
        return true
    }
}

function Routes() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact > <MainPage /> </Route>
                    <Route path="/login" exact> <LogInContainer /> </Route>  
                    <Route path="/signup" exact> <SignUpContainer /></Route> 
                    {/* <Route path="/dashboard" onEnter={requireAuth} exact> <Dashboard /> </Route>     */}
                    <Route exact path="/dashboard" render={() => (
                          requireAuth() ? (
                            <Redirect to="/login"/>
                          ) : (
                            <Dashboard />
                          )
                        )}/>        
                </Switch>
            </Router>
        );
}


export default Routes;