import React from 'react';
import SignUp from "./SignUp";
import { connect } from "react-redux";
import { setEmailText,setPasswordText} from '../../Store/SignUp/actions'


class SignUpContainer extends React.Component{
    render(){
    return(
        <SignUp setEmailText={this.props.setEmailText} setPasswordText={this.props.setPasswordText} email={this.props.email} password={this.props.password} />
    );
    }
}

const mapStateToProps = state =>{
    return{
        email:state.signUp.email,
        password:state.signUp.password
    };
}


const mapDispatchToProps = {
    setEmailText,
    setPasswordText
};


export default connect(mapStateToProps,mapDispatchToProps)(SignUpContainer);