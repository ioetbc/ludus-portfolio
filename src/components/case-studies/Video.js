import React, { useEffect } from "react";

const VideoControls = (id) => {
    const video = document.getElementById(id);

    if (video.paused) video.play();
    else if (video.play) video.pause();
}

const Video = (props) => {
  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1000px)").matches;

    if (props.autoPlay && isDesktop) {
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

  const isDesktop = window.matchMedia("(min-width: 1000px)").matches;
  let renderControls;

  if (isDesktop && props.autoPlay) {
    if (props.autoPlay) {
      renderControls = false;
    } else {
      renderControls = true;
    }
  } else {
    renderControls = true
  }


  return (
    <section>
        <div className={`video-wrapper controls-${renderControls} video-subpage`} onClick={() => renderControls && VideoControls(props.id)}>
            <video
              className='video'
              loop
              id={props.id}
              autoPlay={!!props.mainVideo}
              poster="https://www.emailonacid.com/images/blog_images/Emailology/2013/html5_video/bunny_cover.jpg"
            >
                <source
                src={require(`../../images/probjects/${props.url}`)}
                type="video/mp4"
                />
            </video>
      </div>
    </section>
  );
};

export default Video;
