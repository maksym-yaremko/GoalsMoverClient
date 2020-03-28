import React from 'react';
import './LoginButton.css';
import history from './UrlHistory';


function refreshPage() {
    window.location.reload(true);
  }

function Button(propName){
    switch (propName.propName) {
            case '/':
                return (<button className = "button" onClick={() => {history.push('/login');refreshPage() }}>Log In </button>    );
            case '/login' :
                return (<button className = "button" onClick={() => {history.push('/signUp');refreshPage()} }>Sign Up </button>    );
            default :
            return (<button className = "button" onClick={() => history.push('/another') }>Another </button>    );
    }
}


export default Button;