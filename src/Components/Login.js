import React from 'react';
import HorizontalList from './HorizontalList';
import BodyClassName from 'react-body-classname';
import '../ComponentsStyles/Login.css';
import * as All from '../Api';


class Login extends React.Component{
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
    
        await All.Authenticate(newRecord)

        window.location.href='/dashboard'
    }

    render(){
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
                            <input type="text" id="email-login-signup-form" placeholder="  Email" value={this.props.email} onChange={this.onEmailChange} />
                        </p>
                         <p>
                            <input type="password" id="password-login-signup-form" placeholder="  Password" value={this.props.password} onChange={this.onPasswordChange}/>
                        </p>
                        <p>
                            <button id="submitbutton-login-form" type="button" onClick={this.onButtonSumbit}>Log in</button>
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
}

export default Login;