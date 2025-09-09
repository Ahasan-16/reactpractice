import React from 'react';

const SecondComponent = (props) => {
    return (
        <div>
            <h1 style={{color:"green"}}>Second Component show passing object</h1>
            <ul style={{color:"green"}}>
                <li>{props.object["id"]}</li>
                <li>{props.object["name"]}</li>
                <li>{props.object["description"]}</li>
            </ul>
        </div>
    );
};

export default SecondComponent;