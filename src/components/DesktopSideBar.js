
import React, { Component, Fragment } from 'react';
import Logo from '../images/Ludus_horizontal_black.svg';
const DesktopSideBar = props => {
    return (
       <div className="desktopSideBarWrapper">
            <p className="hamburger-icon" onClick={props.handleMenu}>Menu</p>
            <img src={Logo} />
       </div>
    )
}

export default DesktopSideBar;