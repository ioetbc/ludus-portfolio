import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/case-studies/Header.js";
import MobileHeader from "../components/MobileHeader";
import Video from "../components/case-studies/Video.js";
import Colunmn from "../components/case-studies/Column.js";
import Grid from "../components/case-studies/Grid.js";
import Quote from "../components/case-studies/Quote.js";
import CloseIcon from "../images/close-icon.svg";
import ScrollTop from '../utils/scrollTop';

class Quiva extends Component {
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
            title="QIVA"
            pre="Brand identity, Print design, Logo Design, Motion Graphics. Website design and Icon design"
            url="qiva.co.uk"
          />

          <main className="main">
            <Link to="/">
              <div className="homeWrapper">
                <img className="homeButton" src={CloseIcon} />
              </div>
            </Link>

            <Video
              url="qiva/main.mp4"
              id="non-auto"
            />

            <Colunmn
              class="col3"
              title="Core Principles"
              content={[
                "QIVA is an independent management consultancy specialised in Asia-led business growth. They approached me for a full rebrand that helped position themselves as experts in their field. During the discovery phase it became clear that QIVA’s work takes place in a fluid and chaotic environment, and that they use precision and process to help their clients stand out and get a foot in the door of china’s marketplace.",
                "This contrast between China's chaotic market and QIVA's systematic methodology become the core principle of the brand identity. To visualise this I combined assets influenced by traditional Chinese brush work, patterns and ceramics with geometric, digital iconography and illustrations to capture the ethos as QIVA as a brand.",
              ]}
              img="qiva/logo-square.jpg"
              order="image-left"
            />

            <Grid
              fullWidth="qiva/3_animatedbanner.svg"
            />

            <Colunmn
              class="col3"
              title="The Logo"
              content={[
                `QIVA's Logo icon is a play on the Chinese word, qīng. The definition has
                meanings of clarity, distinction, honesty and purity. The word qīng is written in Chinese using the character that translates to water, evoking fluidity and transparency, all of which QIVA practices in its brand ethos. The Chinese character is combined with the Latin character of 'Q' to connote the blend of Chinese and western practices.`
              ]}
              img="qiva/4_r_LogoProcess.gif"
            />

            <Grid
              twoUp={["qiva/6_l_icons.gif", "qiva/6_r_illustrations.jpg"]}
              fullWidth="qiva/5_brand guidelines.jpg"
              fullWidthTop
            />

            <Quote
              quote="Rob was given a difficult brief – to design a brand for a professional services consultancy that interfaced between Western and Asian culture. The need to capture cultural sentiment from both angles was absolutely paramount. His process, methodology and professionalism has been exceptional – both rigorous, yet personal. His style of collaboration has also been a large factor in determining the success of this project; visualising what we sought to present to our clients, whilst being adaptable and responsive to new suggestions and ideas. Rob has designed an identity for our company that I am really proud of; it presents us in way that appeals to our clients, whilst also reflecting what we stand for. I could not recommend Rob more highly."
              author="Ellie Adams"
              authorTitle="Managing Director"
            />

            <Grid
              twoUp={["qiva/7_l_letterhead.jpg", "qiva/7_r_linkedin.jpg"]}
            />

          </main>
        </div>
      </Fragment>
    );
  }
}

export default Quiva;
