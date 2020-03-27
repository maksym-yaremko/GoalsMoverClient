import React from 'react';
import './HorizontalList.css';
import logo from './logo.jpg';

function HorizontalList(){
    return (
        <div className="header">
            <img src = {logo} alt="Logo" className="logo"></img>
            <button className = "button">Log In</button>
        </div>
    );}

export default HorizontalList;