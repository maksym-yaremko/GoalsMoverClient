import React from 'react';
import bg from './Login.jpg';

const bgPhoto ={
    backgroundImage: `url(${bg})`,
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

function Login(){
    return (
        <div>LOGIN UI
        <div style={bgPhoto}></div>
        </div>
    );
}

export default Login;