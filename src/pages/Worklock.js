import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/case-studies/Header.js";
import Video from "../components/case-studies/Video.js";
import Colunmn from "../components/case-studies/Column.js";
import Grid from "../components/case-studies/Grid.js";
import Quote from "../components/case-studies/Quote.js";
import CloseIcon from "../images/close-icon.svg";

class WorkLock extends Component {
  componentDidMount() {
      document.getElementsByTagName("body")[0].style.overflow = "scroll";
  }

  render() {
    return (
      <Fragment>
        <div className="projectWrapper" id="case-study-wrapper">
          <Header
            title="WorkLock"
            pre="Brand identity, Print design, Logo Design, Motion Graphics. Website design and Icon design"
            url="worklock.co.uk"
          />
          <main className="main">
            <Link to="/">
              <div className="homeWrapper">
                <img className="homeButton" src={CloseIcon} />
              </div>
            </Link>

            <Video url="website.mp4" id="non-auto" />

            <Video url="website.mp4" id="main-video" autoPlay />

            <Colunmn
              class="col3"
              title="Core Principles"
              content={[
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infa",
              ]}
              img="worklock-scribbles.gif"
              order="image-left"
            />

            <Video url="ipad.mp4" id="ipad-video" autoPlay />

            <Colunmn
              class="col3"
              title="Iconography"
              content={[
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
              ]}
              img="icons.gif"
              order="image-right"
            />

            <Video url="phone.mp4" id="phone-video" autoPlay />

            <Quote
              quote="It is a long established fact that a reader will be distracted. It is a long established fact that a reader will be distracted."
              author="Will Cole"
              authorTitle="Worklock founder"
            />

            <Grid
              twoUp={["letter-head.jpg", "icons.gif"]}
              fullWidth="stickers.jpg"
            />
          </main>
        </div>
      </Fragment>
    );
  }
}

export default WorkLock;
