import React, { useEffect } from "react";

const VideoControls = (id) => {
    const video = document.getElementById(id);
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

const Video = (props) => {
  useEffect(() => {
    if (props.cPlay) {
      const section = document.getElementById(props.id);
      const options = { threshold: 0.2 };
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((element) => {
          if (element.isIntersecting) {
            document.getElementById(props.id).play();
          } else if (document.getElementById(props.id)) {
            document.getElementById(props.id).pause();
          }
        });
      }, options);

      observer.observe(section);
    }
  }, []);

  return (
    <section>
        <div className={`video-wrapper controls-${!props.autoPlay}`} onClick={() => !props.autoPlay && VideoControls(props.id)}>
            <video loop id={props.id} autoPlay={props.autoPlay}>
                <source
                src={require(`../../images/probjects/worklock/${props.url}`)}
                type="video/mp4"
                />
            </video>
      </div>
    </section>
  );
};

export default Video;
