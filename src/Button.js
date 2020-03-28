import React from 'react';
import './Button.css';
import history from './UrlHistory';


function Button(propName){
    switch (propName.url) {
            case '/':
                return (<button className = "loginButton" onClick={() => history.push('/login')}>Log In </button>    );
            case '/login' :
                return (<button className = "signUpButton" onClick={() => history.push('/signup')}>Sign Up </button>    );
            case '/signup':
                    return (<button className = "loginButton" onClick={() => history.push('/login')}>Log In </button>    );
            default :
            return (<button className = "button" onClick={() => history.push('/another') }>Another </button>    );
    }
}


export default Button;