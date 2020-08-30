import React from 'react';
import Logo from '../images/Ludus_horizontal_black.svg';

const MobileHeader = props => {
    return (
       <div className="mobileHeaderWrapper">
            <div className="logo">
                <img src={Logo} />
            </div>
            <p className="hamburger-icon" onClick={props.handleMenu}>Menu</p>
       </div>
    )
}

export default MobileHeader;