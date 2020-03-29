import React from 'react';
import HorizontalList from './HorizontalList';
import './SignUp.css';
import BodyClassName from 'react-body-classname';


function SignUp(){

    return (
        <BodyClassName className="signUpPageBodyClass">
            <div>           
                <HorizontalList></HorizontalList>  
                <div>
                    <form id="form_login">
                        <div className = "texts-signup-form">
                            <h1 className = "text-signup-form">Join Goaler today,</h1>
                            <h1 className = "text-signup-form">it's Free.</h1>
                        </div>
                        <div>
                            <a className="signup-page-button-facebook" href="/">Sign up with Facebook</a>
                        </div>
                        <div>
                        <a className="signup-page-button-gmail" href="/">Sign up with Google</a>
                        </div>
                        <p id="sign-up-form-page-text"> or sign up with your email address </p>
                        <p>
                            <input type="text" id="email-sign-up-form" placeholder="  Email" />
                        </p>
                         <p>
                            <input type="password" id="password-sign-up-form" placeholder="  Password" />
                        </p>
                        <p>
                            <button id="submitbutton-signup-form" type="button">Sign up</button>
                        </p>
                        <div className = "terms-texts-signup-form">
                            <p>By signing up for Goaler, you agree to the Terms of Service.</p>
                            <p> View our Privacy Policy.</p>
                        </div>
                    </form>
                </div>
            </div>
        </BodyClassName>
    );
}

export default SignUp;