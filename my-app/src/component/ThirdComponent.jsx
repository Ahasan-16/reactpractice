import React from 'react';

const ThirdComponent = (props) => {
    return (
        <div style={{color:"blue"}}>
            
            <h1>third component show passing function</h1>
            {props.button}
        </div>
    );
};

export default ThirdComponent;