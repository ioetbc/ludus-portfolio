import React, { Component, Fragment } from "react";
import Probjects from "../components/probjects";
import About from "../components/About";
import Contact from "../components/Contact";
import Intro from "../components/Intro";
import MobileHeader from "../components/MobileHeader";
import DesktopSideBar from "../components/DesktopSideBar";
import Divider from "../components/Divider";
import Menu from "../components/Menu";
import { Router } from "react-router-dom";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
    this.handleMenu = this.handleMenu.bind(this);
    // this.handleNavigation = this.handleNavigation.bind(this);
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

    const widthOfDocument = document.getElementById("example-wrapper")
      .clientHeight;
    console.log("widthOfDoc", widthOfDocument);
  }

  handleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  // handleNavigation(id) {
  //   console.log('click', id);

  //   const element = document.getElementById("about");
  //   const y = element.getBoundingClientRect().left;
  //   console.log('y', y)
  //   Router.push('#about')
  // }

  render() {
    const { menuOpen } = this.state;
    return (
      <Fragment>
        <DesktopSideBar handleMenu={this.handleMenu} />


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
