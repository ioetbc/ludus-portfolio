import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/case-studies/Header.js";
import MobileHeader from "../components/MobileHeader";
import Video from "../components/case-studies/Video.js";
import Colunmn from "../components/case-studies/Column.js";
import Grid from "../components/case-studies/Grid.js";
import CloseIcon from "../images/close-icon.svg";
import ScrollTop from '../utils/scrollTop';

class LockDownLudere extends Component {
  componentDidMount() {
      document.getElementsByTagName("body")[0].style.overflow = "scroll";
      ScrollTop();
  }

  render() {
    return (
      <Fragment>
        <div className="projectWrapper" id="case-study-wrapper">
          <MobileHeader />
          <Header
            title="Lockdown Ludere"
            pre="Brand identity, Print design, Logo Design, Motion Graphics. Website design and Icon design"
            url="worklock.co.uk"
          />
          <main className="main">
            <Link to="/">
              <div className="homeWrapper">
                <img className="homeButton" src={CloseIcon} />
              </div>
            </Link>

            <Video url="lockdown/1_LockDownLudere.mp4" id="non-auto" autoPlay mainVideo  />

            <Colunmn
              class="col3"
              title="Core Principles"
              content={[
                "Lockdown Ludere was a personal project over the course of the 3 month period when the United Kingdom was in lockdown due to COVID-19.",
                "The core principle of this project stemmed from some advice I was given in the first weeks of the lockdown: ‘when everyday feels exactly the same, try to see each day from a different perspective’.",
                "So I took this sentiment literally, illustrating my daily routine and apartment with totally different styles, techniques and design methods for each unique aspect. This was to not only push my creative capabilities and to keep me entertained – but to help review and curate my creative direction.",
                "The video has 27 unique shots that individually helped to expand my motion graphics skillset. Using a variety of techniques such as stop motion, hand drawn cel shading, keyframed tweening, walk cycles, 3D modelling and simulations and procedural rendering."
              ]}
              img="lockdown/2_r.jpg"
              order="image-left"
            />

            <Grid
              fullWidth="lockdown/3_Flatreference_images.mp4"
            />

            <Colunmn
              class="col3"
              title="Title design"
              content={[
                "Another design aspect of this project was creating a appropriate brand. For this I created a custom display typeface that I named ‘Ludere’.  Meaning ‘play’ in latin, which I felt that was an appropriate as the project essentially just consisted of me playing about with various styles and design forms.",
                "The typeface design itself was created to be distinct and unique, with a blend of both geometric balance and a quirky personality.",
              ]}
              img="lockdown/4_R.gif"
              order="image-left"
            />

            <Grid
              fullWidth="lockdown/5_ludureportfolio.mp4"
            />

            <Grid
            twoUp={["lockdown/6_l.jpg", "lockdown/6_R.gif"]}
          />

          <Video url="lockdown/7_Blank-render.mp4" id="vector-video" autoPlay />

          </main>
        </div>
      </Fragment>
    );
  }
}

export default LockDownLudere;
