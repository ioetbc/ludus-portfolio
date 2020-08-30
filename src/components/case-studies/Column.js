import React, { useEffect } from 'react';

const Column = props => {
    return (
        <section>
            {props.order === 'image-left' ?
                <div className={`${props.class} column${props.order === 'image-left' ? '-reverse' : null}`}>
                    <img className="video-subpage" src={require(`../../images/probjects/${(props.img)}`)} />
                        <h5
                            className="title"
                            style={{ textAlign: "center" }}
                        >
                            {props.title}
                        </h5>
                    <div>
                        {props.content.map(p => <p>{p}</p>)}
                    </div>
                </div>
                :
                <div className={`${props.class} column${props.order === 'image-left' ? '-reverse' : ''}`}>
                    <h5 className="title">{props.title}</h5>
                    <div>
                        {props.content.map(p => <p>{p}</p>)}
                    </div>
                    <img className="video-subpage" src={require(`../../images/probjects/${(props.img)}`)} />
                </div>
            }   
        </section>
    );
}

export default Column;