import React from 'react';
import { Router, Switch, Route, Redirect } from "react-router-dom";

import LogInContainer from "./LoginContainer";
import MainPage from "./MainPage"
import history from './UrlHistory';
import SignUpContainer from './SignUp/SignUpContainer';
import Dashboard from './Dashboard';
import JwtDecode from 'jwt-decode';
import * as All from '../Api';


 function requireAuth() {
    var token = localStorage.getItem('accessToken')
    var decodedAccessToken = JwtDecode(token)
    if(token == null){
        return true
    }

    if(decodedAccessToken.exp * 1000 < Date.now() ){
        var Tokens = {
            AccessToken : localStorage.getItem('accessToken'),
            RefreshToken : localStorage.getItem('refreshToken')
        }
        All.RefreshToken(Tokens).then(() => { return false })
    }
    console.log("la1")
    return false;
}

function Routes() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact > <MainPage /> </Route>
                    <Route path="/login" exact> <LogInContainer /> </Route>  
                    <Route path="/signup" exact> <SignUpContainer /></Route> 
                    <Route exact path="/dashboard" render={() => ( !requireAuth() ? (<Dashboard />) : (<Redirect to="/login"/>))}/>
                </Switch>
            </Router>
        );
}


export default Routes;