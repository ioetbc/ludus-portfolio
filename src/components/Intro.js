import React, { Component, Fragment } from 'react';
import DownArrow from '../images/down-arrow.svg';

function scrollTo() {
    const yOffset = -90; 
    const element = document.getElementById("introHeading");
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
}

const About = () => {
    return (
        <div className="layoutWrapper">
        <div className="probjectContent component">
            <h2>I'm Rob Game.</h2>
            <p className="pre">Ix like to take design in a different direction.</p>
        </div>
        <img onClick={() => scrollTo()} className="downArrow" src={DownArrow} />
    </div>
    )
}

export default About;