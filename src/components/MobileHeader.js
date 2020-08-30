import React from 'react';
import Logo from '../images/Ludus_horizontal_black.svg';
import HamburgerOpen from '../images/hamburger/Open_Hamburger.svg';
import HamburgerClose from '../images/hamburger/Exit_hamburger.svg';

const MobileHeader = props => {
    return (
       <div className="mobileHeaderWrapper">
            <div className="logo">
                <img src={Logo} />
            </div>
            <img
                className="hamburger-icon"
                onClick={props.handleMenu}
                src={props.menuOpen ? HamburgerClose : HamburgerOpen}
            >
            </img>
       </div>
    )
}

export default MobileHeader;