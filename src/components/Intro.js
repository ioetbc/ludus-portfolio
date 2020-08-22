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
    <div className="layoutWrapper intro">
        <div className="probjectContent component intro">
            <h2 className="font__extra-large">I'm Rob Game.</h2>
            <p className="intro-pre font__large desktop">A process led creative that likes to take design in a different direction.</p>
            <p className="intro-para font__large mobile">I like design.</p>
            <p className="intro-para font__small desktop">Enjoy a showcase of projects that I have done on a freelace basis, where I have been the sole creative on the project.</p>
            <img onClick={() => scrollTo()} className="downArrow" src={DownArrow} />
        </div>
    </div>
    )
}

export default About;