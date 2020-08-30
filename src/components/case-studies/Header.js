import React, { Component, Fragment } from 'react';

const Header = props => {
    return (
        <header className="projectHeader">
            <h1 className="projectHeading font__extra-large">{props.title}</h1>
            <p className="pre">
                {props.pre}
            </p>
        </header>
    )
}

export default Header;