import React, { Component, Fragment } from 'react';
import Logo from '../images/Ludus_horizontal_black.svg';

const MobileHeader = () => {
    return (
       <div className="mobileHeaderWrapper">
        <div className="logo">
            <img src={Logo} />
        </div>
       </div>
    )
}

export default MobileHeader;