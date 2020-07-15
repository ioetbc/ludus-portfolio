import React from 'react';

const Menu = props => {
    return (
        <div className={`menu-wrapper ${props.menuOpen && 'fade-in'}`}>
            <div className="menu-container">
            <h2>Video</h2>
            <h2>Work</h2>
            <h2>About Me</h2>
            <h2>Contact</h2>
            </div>
        </div>
    )
}

export default Menu;