import React, { useEffect } from 'react';

const Video = props => {
    useEffect(() => {
        const section = document.getElementById(props.id);
        const options = { threshold: .2 };
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(element => {
				if (element.isIntersecting) {
                    console.log('document.getElementById(props.id)', document.getElementById(props.id))
                        document.getElementById(props.id).play();
                    } else if (document.getElementById(props.id)) {
                        console.log('document.getElementById(props.id)', document.getElementById(props.id))
                        document.getElementById(props.id).pause();
                    }
				});
        }, options);

        observer.observe(section);
    }, []); 
    console.log('video pros', props.url)

    return (
    
        <section>
            <video loop id={props.id}>
                <source src={require(`../../images/probjects/worklock/${(props.url)}`)} type="video/mp4" />
            </video>
        </section>
    );
}

export default Video;