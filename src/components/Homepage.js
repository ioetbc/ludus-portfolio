import React, { Component, Fragment } from "react";
import Probjects from "../components/probjects";
import About from "../components/About";
import Contact from "../components/Contact";
import Intro from "../components/Intro";
import MobileHeader from "../components/MobileHeader";
import DesktopSideBar from "../components/DesktopSideBar";
import Divider from "../components/Divider";
import invertScroll from "../utils/invertScroll";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { wheelEventAdded: false };
  }
  componentDidMount() {

    // const sections = document.querySelectorAll(".aboutWrapper");
    // const options = { threshold: .7 };
    // const observer = new IntersectionObserver((entries, observer) => {
    //   entries.forEach((element) => {
    //     const body = document.getElementsByTagName("body")[0];
    //     if (element.isIntersecting) {
    //       body.classList = "bg-black";
    //     } else {
    //       body.classList = "bg-white";
    //     }
    //   });
    // }, options);

    // sections.forEach((section) => observer.observe(section));

    const fadeInSections = document.querySelectorAll(".component");
    const fadeInOptions = { threshold: 0.4 };
    const fadeInObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((element) => {
        if (element.isIntersecting) {
          element.target.classList += " fade-in";
        }
      });
    }, fadeInOptions);

    if (fadeInSections)
      fadeInSections.forEach((section) => fadeInObserver.observe(section));

    const widthOfDocument = document.getElementById('example-wrapper').clientHeight;
    console.log('widthOfDoc', widthOfDocument)
  }

  render() {
    return (
      <Fragment>
      <DesktopSideBar />
        <div id="example-wrapper" className="horizontal">
          <div class="inner-wrapper">
            <MobileHeader />

            <div class="homepage-video-wrapper">
              <div class="vimeo-wrapper">
                <iframe
                  id="vimeo_player"
                  src="//player.vimeo.com/video/108960330?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;loop=1&amp;background=1"
                  width="100%"
                  height="100%"
                  class="video hide-on-mobile"
                  frameborder="0"
                  webkitallowfullscreen=""
                  mozallowfullscreen=""
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>

            <Intro />

            <Divider fullHeight={true} />

            <Probjects />

            <Divider fullHeight={true} />

            <About />

            <Contact />
            </div>
          </div>

      </Fragment>
    );
  }
}

export default Homepage;
