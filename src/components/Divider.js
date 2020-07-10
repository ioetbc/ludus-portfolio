import React, { Component, Fragment } from 'react';

const Divider = fullHeight => {
    return (
        fullHeight ?
            <div className="dividerFullHeight"></div>
            :
            <div className="divider"></div>
    )
}

export default Divider;