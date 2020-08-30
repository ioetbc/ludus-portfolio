import React, { useEffect, Fragment } from 'react';

const Grid = props => {
    return (
        <section>
            {props.fullWidthTop ?
                <Fragment>
                <section>
                {props.fullWidth &&
                    <img className="fullWidth" src={require(`../../images/probjects/${(props.fullWidth)}`)} />            
                }
                </section>  
                {props.twoUp &&
                    <div className="twoUp">
                        {props.twoUp.map(url => <img src={require(`../../images/probjects/${(url)}`)} />)}
                    </div>
                }
                </Fragment> :
                <Fragment>
                <section>
                {props.twoUp &&
                    <div className="twoUp">
                        {props.twoUp.map(url => <img src={require(`../../images/probjects/${(url)}`)} />)}
                    </div>
                }
                </section>

                {props.fullWidth &&
                    <img className="fullWidth" src={require(`../../images/probjects/${(props.fullWidth)}`)} />            
                }
                </Fragment>
            }
        </section>
    );
}

export default Grid;
