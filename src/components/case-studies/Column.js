import React, { useEffect } from 'react';

const Column = props => {
    return (
        <section>
            {props.order === 'image-left' ?
                <div className={props.class} style={{ gridTemplateColumns: '5fr 3fr 2fr' }}>
                    <img src={require(`../../images/probjects/worklock/${(props.img)}`)} />
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
                <div className={props.class} style={{ gridTemplateColumns: '2fr 3fr 5fr' }}>
                    <h5 className="title">{props.title}</h5>
                    <div>
                        {props.content.map(p => <p>{p}</p>)}
                    </div>
                    <img src={require(`../../images/probjects/worklock/${(props.img)}`)} />
                </div>
            }   
        </section>
    );
}

export default Column;