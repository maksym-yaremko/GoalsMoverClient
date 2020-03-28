import React from 'react';
import HorizontalList from './HorizontalList';

const divstyle = {
    color : 'black',
    textAlign : 'center',
    marginTop : '60px',
    fontSize: '55px',
    fontWeight : '600'
}

function MainPage(){
    return (
        <div>
            <HorizontalList></HorizontalList>
        <div style={divstyle}>The #1 app for setting your goals</div>
        </div>
    );
}

export default MainPage;