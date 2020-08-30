
import React, { Component, Fragment } from 'react';
import Logo from '../images/Ludus_horizontal_black.svg';
import HamburgerOpen from '../images/hamburger/Open_Hamburger.svg';
import HamburgerClose from '../images/hamburger/Exit_hamburger.svg';

const DesktopSideBar = props => {
    return (
       <div className="desktopSideBarWrapper">
            <img
                className="hamburger-icon"
                onClick={props.handleMenu}
                src={props.menuOpen ? HamburgerClose : HamburgerOpen}
            >
                
            </img>
            <img className="logo" src={Logo} />
       </div>
    )
}

export default DesktopSideBar;