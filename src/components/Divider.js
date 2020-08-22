import React, { Component, Fragment } from 'react';

const Divider = ({ fullHeight, ThirdWidth, FullWidth, white }) => {
    let type;

    if (fullHeight) {
        type = 'dividerFullHeight';
    } else if (ThirdWidth) {
        type = 'dividerThirdWidthMobile';
    } else if (FullWidth) {
        type = 'dividerFullWidthMobile';
    } else {
        type = 'divider';
    }

    return <div className={`${type} white-${white}`}></div>
}

export default Divider;