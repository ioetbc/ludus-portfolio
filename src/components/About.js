import React, { Component, Fragment } from 'react';

// import style from '../styles/about.module.scss';

const About = () => {
    return (
        <div
            className="background"
            style={{ display: 'inline-block', verticalAlign: 'top' }}
        >

            <div className="layoutWrapper background">
                <div className="probjectContent component">
                    <div className="intro">
                        <h2>About Me</h2>
                        <div className="col2">
                            <h6>Rob Game</h6>
                            <p>A Hampshire based designer with five years of experience working at digital agencies, marketing agencies and freelancing</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="layoutWrapper">
            <div className="probjectContent component">
                <div className="skillSet">
                    <h6>Skill Set</h6>
                    <ul>
                        <li>Design</li>
                        <li>Branding</li>
                        <li>Illustration</li>
                        <li>Motion Graphics</li>
                        <li>Direction</li>
                    </ul>
                </div>
            </div>
        </div>

            <div className="layoutWrapper">
            <div className="probjectContent component">
                <div className={`$"experience" component`}>
                    <div className="work">
                        <h2>Experience</h2>
                        <div className="col2">
                            <h6>Current Postitions</h6>
                            <p>Think Creative - Designer World Food Programme, Consultant Freelance</p>
                        </div>
                        <div className="col2">
                            <h6>Previous Postitions</h6>
                            <ul>
                                <li>Big Mallet - lead designer</li>
                                <li>Clockwork Pie - designer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <div className="layoutWrapper">
            <div className="probjectContent component">
                <div className={`$"experience" component`}>
                    <div className={`$"interests" component`}>
                        <div className="col2">
                            <h6>Interests and preferences</h6>
                            <ul>
                                <li>Playing Guitar</li>
                                <li>Strenth and conditioning</li>
                                <li>Eating Lasagne</li>
                                <li>Black coffee</li>
                                <li>Video games</li>
                                <li>Jaffa cakes</li>
                            </ul>
                        </div>
                        <div className="col2">
                            <h6>Achievments</h6>
                            <div>
                                <p>Distinction in Creative multimedia and Design FDA</p>
                                <p>A levels in Media Studies, Music Technolog and English Lit/Lang</p>
                                <p>250kg Deadlift</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default About;