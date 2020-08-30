import React from 'react';

const Menu = props => {
    return (
        <div className={`menu-wrapper ${props.menuOpen && 'fade-in'}`}>
            <div className="menu-container font__extra-large">
            <a href="#menu-intro" onClick={props.handleMenu}><h2>Video</h2></a>
            <a href="#menu-probjects" onClick={props.handleMenu}><h2>Work</h2></a>
            <a href="#menu-about" onClick={props.handleMenu}><h2>About Me</h2></a>
            <a href="#menu-contact" onClick={props.handleMenu}><h2>Contact</h2></a>
            </div>
        </div>
    )
}

export default Menu;