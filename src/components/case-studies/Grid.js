import React, { useEffect } from 'react';

const Grid = props => {
    return (
        <section>
            <div className="twoUp">
                {props.twoUp.map(url => <img src={require(`../../images/probjects/worklock/${(url)}`)} />)}
            </div>
            <img className="fullWidth" src={require(`../../images/probjects/worklock/${(props.fullWidth)}`)} />
        </section>
    );
}

export default Grid;
