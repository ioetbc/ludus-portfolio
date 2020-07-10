import React, { Component, Fragment } from 'react';

const Header = props => {
    return (
        <header className="projectHeader">
            <h1 className="projectHeading">{props.title}</h1>
            <p className="pre">
                {props.pre}
            </p>
            <a className="link" href={`https://www.${props.url}`}>Go to site</a>
        </header>
    )
}

export default Header;