import React, { Component, Fragment } from 'react';
// import style from '../styles/contact.module.scss';

const Contact = () => {
    return (
            <div className="contactWrapper">
            <div className="layoutWrapper">
            <div className="aboutContent component">
                <div className="intro">
                        <h2 style={{ color: 'black' }}>Get in touch</h2>
                        <p className="email">Rob@ludusdesign.co.uk</p>
                        <div className="col2">
                            <h6 style={{color: 'black', width: '45px' }}>Stalk my instagrams</h6>
                            <div className="col1">
                                <a className="link" href="">@ludus_design</a>
                                <a className="link" href="">@robgameillustrations</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;