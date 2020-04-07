import React from 'react';
import '../../ComponentsStyles/SignUp.css';
import BodyClassName from 'react-body-classname';

import HorizontalList from '../HorizontalList';
import * as All from '../../Api';
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";

import '../../ComponentsStyles/SignUp.css';

class SignUp extends React.Component{
    fieldStateChanged = field => state => this.setState({ [field]: state.errors.length === 0 });

    emailChanged = this.fieldStateChanged('email');
    passwordChanged = this.fieldStateChanged('password');

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password : ''
        };
      }

    onEmailChange(event){     
        this.props.setEmailText(event.target.value);
        this.setState({email:event.target.value});
    }

    onPasswordChange(event){
        this.props.setPasswordText(event.target.value);
        this.setState({password:event.target.value});
    }

    onButtonSumbit(){
        const newRecord ={
            Email:this.state.email,
            Password:this.state.password
        };
    
        All.CreateUser(newRecord).then(() => window.location.href='/');
        //window.location.href='/'
    }

    render(){
        const { email, password } = this.state;
        const formValidated = email && password;
    return (
        <BodyClassName className="signUpPageBodyClass">
            <div>           
                <HorizontalList/>
                <div>
                    <form id="form_login">
                        <div className = "texts-login-signup-form">
                            <h1 className = "text-login-signup-form">Join Goaler today,</h1>
                            <h1 className = "text-login-signup-form">it's Free.</h1>
                        </div>
                        <div>
                            <a className="login-signup-page-button-facebook" href="/">Sign up with Facebook</a>
                        </div>
                        <div>
                        <a className="login-signup-page-button-gmail" href="/">Sign up with Google</a>
                        </div>
                        <p id="login-sign-up-form-page-text"> or sign up with your email address </p>
                        <p>
                            <EmailField type="text" fieldId="email-login-signup-form" label="Email" placeholder="  Email" value={this.props.email} onChange={this.emailChanged} />
                        </p>
                         <p>
                            <PasswordField type="password" fieldId="password-login-signup-form" label="Password" placeholder="  Password" value={this.props.password} onChange={this.passwordChanged}/>
                        </p>
                        <p>
                            {formValidated && <button id="submitbutton-signup-form" type="button" onClick={this.onButtonSumbit}>Sign up</button>}
                        </p>
                        <div className = "terms-texts-login-signup-form">
                            <p>By signing up for Goaler, you agree to the Terms of Service.</p>
                            <p> View our Privacy Policy.</p>
                        </div>
                    </form>
                </div>
            </div>
        </BodyClassName>
    );
    }
}

export default SignUp;