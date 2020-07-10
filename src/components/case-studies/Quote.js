import React, { useEffect } from 'react';

const Quote = props => {
    return (
        <section>
                <div className="quoteWrapper">
                    <p className="quote">"{props.quote}"</p>
                    <div>
                        <p
                            className="quoteName"
                            style={{ marginBottom: 0 }}
                        >
                            {props.author}
                        </p>
                        <p className="quoteCompany">{props.authorTitle}</p>
                    </div>
                </div>
        </section>
    );
}

export default Quote;
