import React from 'react';
import { NavLink } from 'react-router-dom';
const Item = () => {
    return (
        <div>
            <ul>
                <li><NavLink className={({isActive})=>isActive?"active":"pending"} to="/">Page1</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active":"pending"} to="/page2">Page2</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active":"pending"} to="/page3">Page3</NavLink></li>
            </ul>
        </div>
    );
};

export default Item;