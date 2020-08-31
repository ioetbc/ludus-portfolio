import React, { Component } from "react";

class Video extends  Component {
  constructor(props) {
    super(props);
    this.state = { mute: true }
    this.VideoControls = this.VideoControls.bind(this);
  }

  componentDidMount() {
    const isDesktop = window.matchMedia("(min-width: 1000px)").matches;

    if (this.props.autoPlay) {
        const video = document.getElementById(this.props.id);
        const options = { threshold: 0.2 };
        const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((element) => {

          if (isDesktop) {
            if (element.isIntersecting) {
              video.play();
            } else if (document.getElementById(this.props.id)) {
              video.pause();
            }
          } else {
            if (!element.isIntersecting) {
              video.pause();
            }
          }
        });
      }, options);

      observer.observe(video);
    }

    if (this.props.hasSound) {
      const video = document.getElementById(this.props.id);
      video.volume = 0;
    }
  };

  VideoControls(id, type) {
    const video = document.getElementById(id);

    if (type === 'play') {
      if (video.paused) video.play();
      else if (video.play) video.pause();
    }

    if (type === 'sound') {
      if (video.volume === 0) {
        this.setState({ mute: false }, () => video.volume = 1);
      } else {
        this.setState({ mute: true }, () => video.volume = 0);
      }
    }
}


  render() {
    const { mute } = this.state;
    const isDesktop = window.matchMedia("(min-width: 1000px)").matches;
    let renderControls;
  
    if (isDesktop && this.props.autoPlay) {
      if (this.props.autoPlay) {
        renderControls = false;
      } else {
        renderControls = true;
      }
    } else {
      renderControls = true
    }

    return (
      <section>
          <div className={`video-wrapper controls-${renderControls} video-subpage`} onClick={() => renderControls && this.VideoControls(this.props.id, 'play')}>
              {this.props.hasSound &&
                <p className="toggle-mute" onClick={() => this.VideoControls(this.props.id, 'sound')}>{mute ? 'Unmute' : "Mute"}</p>
              }  
              <video
                className='video'
                loop
                id={this.props.id}
                autoPlay={!!this.props.mainVideo && isDesktop}
                poster="https://www.emailonacid.com/images/blog_images/Emailology/2013/html5_video/bunny_cover.jpg"
                mute
              >
                <source
                  src={require(`../../images/probjects/${this.props.url}`)}
                  type="video/mp4"
                />
              </video>
        </div>
      </section>
    );
  }
};

export default Video;
