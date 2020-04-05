import React from 'react';
import LogIn from "./Login";
import { connect } from "react-redux";
import { setEmailText,setPasswordText} from '../Store/SignIn/actions'


class LogInContainer extends React.Component{
    render(){
    return(
        <LogIn setEmailText={this.props.setEmailText} setPasswordText={this.props.setPasswordText} email={this.props.email} password={this.props.password} />
    );
    }
}

const mapStateToProps = state =>{
    return{
        email:state.logIn.email,
        password:state.logIn.password
    };
}

const mapDispatchToProps = {
    setEmailText,
    setPasswordText
};


export default connect(mapStateToProps,mapDispatchToProps)(LogInContainer);