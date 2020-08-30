import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/case-studies/Header.js";
import MobileHeader from "../components/MobileHeader";
import Video from "../components/case-studies/Video.js";
import Colunmn from "../components/case-studies/Column.js";
import Grid from "../components/case-studies/Grid.js";
import CloseIcon from "../images/close-icon.svg";

class ShelterBox extends Component {
  componentDidMount() {
      document.getElementsByTagName("body")[0].style.overflow = "scroll";
  }

  render() {
    return (
      <Fragment>
        <div className="projectWrapper" id="case-study-wrapper">
          <MobileHeader />
          <Header
            title="Shelter Box COVID-19 Appeal"
            pre="Brand identity, Print design, Logo Design, Motion Graphics. Website design and Icon design"
            url="worklock.co.uk"
          />
          <main className="main">
            <Link to="/">
              <div className="homeWrapper">
                <img className="homeButton" src={CloseIcon} />
              </div>
            </Link>

            <Video url="shelterBox/1_Shelterbox_Animation_2.mp4" id="non-auto" />

            <Colunmn
              class="col3"
              title="Thumb stopping animation"
              content={[
                "I created a 90 second animated video for the international charity, ShelterBox to help raise awareness to their work overseas during the COVID-19 virus outbreak. They wanted an informative, eye-catching animation that matched their clean aesthetic, and the existing COVID-19 awareness print campaign.",
                "I worked on their rebrand 5 years ago at a previous agency, Big Mallet. Therefore I had a good understanding on how I could capture the brand ethos for this animation. My approach was expand the brands colour palette with luscious, rich colours, and create smooth fluid transitions between shots to keep the audience hooked as the visuals flow onto the screen."
              ]}
              img="shelterBox/2_process.gif"
              order="image-left"
            />

            <Grid
              fullWidth="shelterBox/3_stillmontage.jpg"
            />

            <Grid
              twoUp={["shelterBox/4_l_familyshot.jpg", "shelterBox/4_r_illustratedassets.gif"]}
              fullWidth="shelterBox/5_social.png"
              fullWidthTop
            />

            <Grid
              fullWidth="shelterBox/6_familyshot_2.jpg"
            />
            
          </main>
        </div>
      </Fragment>
    );
  }
}

export default ShelterBox;
