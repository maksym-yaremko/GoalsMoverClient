import React from 'react';
import HorizontalList from './HorizontalList';
import '../ComponentsStyles/SignUp.css';
import BodyClassName from 'react-body-classname';
import * as All from '../Api';

class SignUp extends React.Component{
    constructor(props) {
        super(props);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onButtonSumbit = this.onButtonSumbit.bind(this)

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

    async onButtonSumbit(){
        const newRecord ={
            Email:this.state.email,
            Password:this.state.password
        };
    
        await All.CreateUser(newRecord)
        window.location.href='/'
    }

    render(){
    return (
        <BodyClassName className="signUpPageBodyClass">
            <div>           
                <HorizontalList></HorizontalList>  
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
                            <input type="text" id="email-login-signup-form" placeholder="  Email" value={this.props.email} onChange={this.onEmailChange}/>
                        </p>
                         <p>
                            <input type="password" id="password-login-signup-form" placeholder="  Password" value={this.props.password} onChange={this.onPasswordChange}/>
                        </p>
                        <p>
                            <button id="submitbutton-signup-form" type="button" onClick={this.onButtonSumbit}>Sign up</button>
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