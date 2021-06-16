import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@material-ui/core';

function HeaderOption ({Icon, title, avatar}) {
    return (
        <div className='headerOption'>
            {/* if there is an Icon  from maturial UI then render the icon */}
            {Icon && <Icon className="headerOption__icon"/>}
            {avatar && <Avatar className="headerOption__icon" src={avatar}/>}
            {/* !!! !!! src={avatar} entre crochet pcq parametre*/}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}
export default HeaderOption