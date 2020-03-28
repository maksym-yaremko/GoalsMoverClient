import React from 'react';
import Button from './Button';
import logo from './logo.jpg';
import history from './UrlHistory';



class HorizontalList extends React.Component{
    componentDidUpdate(){
        console.log(history.location.pathname)
    }
    render(){
    return (
        <div className="header">
            <img src = {logo} alt="Logo" className="logo"></img>
            <button className = "button" onClick={() => history.push('/login')}>Log In</button>
        </div>
        
    );
}
}


export default HorizontalList;