import React from 'react';
import HorizontalList from './HorizontalList';
import BodyClassName from 'react-body-classname';
import './Login.css';


function Login(){
    return (
        <BodyClassName className="logInPageBodyClass">
            <div>
                <HorizontalList></HorizontalList>
                <form id="form_login">
                        <div className = "texts-login-signup-form">
                            <h1 className = "text-login-signup-form">Log In</h1>
                        </div>
                        <div>
                            <a className="login-signup-page-button-facebook" href="/">Sign up with Facebook</a>
                        </div>
                        <div>
                        <a className="login-signup-page-button-gmail" href="/">Sign up with Google</a>
                        </div>
                        <p id="login-sign-up-form-page-text"> Or log in with email </p>
                        <p>
                            <input type="text" id="email-login-signup-form" placeholder="  Email" />
                        </p>
                         <p>
                            <input type="password" id="password-login-signup-form" placeholder="  Password" />
                        </p>
                        <p>
                            <button id="submitbutton-login-form" type="button">Log in</button>
                        </p>
                        <hr id="login-form-hr"></hr>
                        <div className = "terms-texts-login-signup-form">
                            <p>Forgot your password?</p>
                        </div>
                    </form>
            </div>
        </BodyClassName>
    );
}

export default Login;