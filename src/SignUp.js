import React from 'react';
import HorizontalList from './HorizontalList';
import './SignUp.css';
import BodyClassName from 'react-body-classname';


function SignUp(){

    return (
        <BodyClassName className="signUpPageBodyClass">
            <div>           
                <HorizontalList></HorizontalList>  

            </div>
        </BodyClassName>
    );
}

export default SignUp;