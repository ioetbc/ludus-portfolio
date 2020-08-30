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
    this.state = { menuOpen: false, mute: true };
    this.handleMenu = this.handleMenu.bind(this);
    this.videoControls = this.videoControls.bind(this);
  }

  componentDidMount() {
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

    const video = document.getElementById('vimeo_player');
    video.volume = 0;

  }

  handleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  videoControls = () => {
    const video = document.getElementById('vimeo_player');

    if (video.volume === 0) {
      this.setState({ mute: false }, () => video.volume = 1);
    } else {
      this.setState({ mute: true }, () => video.volume = 0);
    }
  }

  render() {
    const { menuOpen, mute } = this.state;

    return (
      <Fragment>
        <DesktopSideBar
          handleMenu={this.handleMenu}
          menuOpen={menuOpen}
        />
        {menuOpen &&
          <Menu
            menuOpen={menuOpen}
            handleMenu={this.handleMenu}
          />
        }

        <div id="example-wrapper" className="horizontal">
          <div class="inner-wrapper">
            <MobileHeader
              handleMenu={this.handleMenu}
              menuOpen={menuOpen}
            />

            <div className="intro-video-wrapper" id="menu-intro" onClick={() => this.videoControls()}>
              <p className="toggle-mute">{mute ? 'Unmute' : "Mute"}</p>
              <video loop id="vimeo_player" className="intro-video" autoPlay>
                  <source
                    src={require("../images/PexelsVideos1531418.mp4")}
                    type="video/mp4"
                  />
              </video>
            </div>

            <Divider ThirdWidth />
            
            <Intro />

            <Divider FullWidth />

            <Probjects />

            <Divider fullHeight />

            <About />

            <Contact />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Homepage;
