import React from 'react';
import Button from './Button';
import logo from './logo.jpg';
import history from './UrlHistory';



function HorizontalList(){
    console.log(history.location.pathname)
    return (
        <div className="header">
            <a href="/"><img src = {logo} alt="Logo" className="logo"></img></a>
            <Button url = {history.location.pathname}></Button>
        </div>
        
    );
}


export default HorizontalList;