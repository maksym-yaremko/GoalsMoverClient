import React from 'react';

function Dahboard(){
    var token = localStorage.getItem('accessToken');
    console.log(token);
    return(
        <div>
            Content inside app. After login
        </div>
    );
}

export default Dahboard;