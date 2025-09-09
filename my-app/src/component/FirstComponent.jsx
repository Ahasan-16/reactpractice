import React from 'react';

const FirstComponent = (props) => {
    return (
        <div>
            <h1 style={{color:"red"}}>first component show pass simple date</h1>
            <h1 style={{color:"red"}}>Today date is {props.time}</h1>
        </div>
    );
};

export default FirstComponent;