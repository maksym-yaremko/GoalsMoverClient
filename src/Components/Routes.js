import React from 'react';
import { Router, Switch, Route, Redirect } from "react-router-dom";

import LogInContainer from "./LoginContainer";
import MainPage from "./MainPage"
import history from './UrlHistory';
import SignUpContainer from './SignUpContainer';
import Dashboard from './Dashboard';
import JwtDecode from 'jwt-decode';
import * as All from '../Api';


 async function requireAuth() {
    var token = localStorage.getItem('accessToken');
    var decodedAccessToken = JwtDecode(token)
    if(token == null){
        return true
    }

    if(decodedAccessToken.exp * 1000 < Date.now() ){
        var Tokens = {
            AccessToken : localStorage.getItem('accessToken'),
            RefreshToken : localStorage.getItem('refreshToken')
        }
        await All.RefreshToken(Tokens)
        return false;
    }
    return false;
}

function Routes() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact > <MainPage /> </Route>
                    <Route path="/login" exact> <LogInContainer /> </Route>  
                    <Route path="/signup" exact> <SignUpContainer /></Route> 
                    <Route exact path="/dashboard" render={() => ( requireAuth() ? (<Redirect to="/login"/>) : (<Dashboard />))}/>        
                </Switch>
            </Router>
        );
}


export default Routes;