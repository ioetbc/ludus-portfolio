import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/case-studies/Header.js";
import MobileHeader from "../components/MobileHeader";
import Video from "../components/case-studies/Video.js";
import Colunmn from "../components/case-studies/Column.js";
import Grid from "../components/case-studies/Grid.js";
import Quote from "../components/case-studies/Quote.js";
import CloseIcon from "../images/close-icon.svg";

class Orangery extends Component {
  componentDidMount() {
      document.getElementsByTagName("body")[0].style.overflow = "scroll";
  }

  render() {
    return (
      <Fragment>
        <div className="projectWrapper" id="case-study-wrapper">
          <MobileHeader />
          <Header
            title="The Winchester Orangery"
            pre="Brand identity, Print design, Logo Design, Motion Graphics. Website design and Icon design"
            url="worklock.co.uk"
          />
          <main className="main">
            <Link to="/">
              <div className="homeWrapper">
                <img className="homeButton" src={CloseIcon} />
              </div>
            </Link>

            <Video url="orangery/1_animation.mp4" id="non-auto" />


            <Colunmn
              class="col3"
              title="Core Principles"
              content={[
                "The Winchester Orangery approached me to create a new visual identity to their printed materials in their restaurant. This included loyalty cards, menus, takeaway cups and promotional images for their website and social media.",
                "The brief was too ‘capture the essence of The Winchester Orangery’. In the discovery phases of the project it became apparent that customer experience was rooted in its aesthetics and interior design, and that the printed visual identity should follow suit.",
                "This led me to create an intricate series of 3D artworks that celebrate and compile all the design elements that capture the essence of The Winchester Orangery. So that when a customer buys a takeaway coffee, they can get The Winchester Orangery experience, without setting foot in the restaurant."
              ]}
              img="orangery/2_L_TWO_explain.gif"
              order="image-left"
            />

            <Grid
              twoUp={["orangery/3_l_orangryInsitu.jpg", "orangery/3_r_coffee cup.jpg"]}
              fullWidth="orangery/4_cards.jpg"
            />

            <Grid
              twoUp={["orangery/5_l_3D render.jpg", "orangery/5_R_extrior.jpg"]}
              fullWidth="orangery/4_cards.jpg"
            />

            <Colunmn
              class="col3"
              title="Menu Design"
              content={[
                "The next challenge of the project was creating a consistent look and feel across all of the printed menus in the restaurant. The problem that the clients faced was that they serve a varied, constantly changing selection of food and drink at breakfast, lunch and dinner. This made creating a consistent look and very difficult, as they struggled to get the selection to fit on the pages.",
                "My solution was to create a flexible, yet structured design system that could accommodate whatever the chefs could think of, without sacrificing the consistency.",
                "The system worked for the fully packed menus, as was efficiently and cost effectively adapted their heavily reduced takeaway menus during the COVID-19 lockdown."
              ]}
              img="orangery/6_r_menugrid.gif"
              order="image-left"
            />

            <Grid
              fullWidth="orangery/7_menu_spreads.jpg"
            />

            <Quote
              quote="We contacted Rob initially in regards to creating a new takeout cup design and within a couple of days they had a whole new contemporary concept for The Orangery that completely blew us away and instantly all directors loved. Rob encouraged us to develop more of a recognisable brand using his graphic designs, complete menu design, short digital films and more. We could contact Rob any time we had an idea or needed something new and he would produce such amazing, high quality work (and we are very fussy!) We look forward to working with him on our future projects very soon and could not recommend him enough."
              author="Layla Lloyd"
              authorTitle="Manager, The Winchester Orangery"
            />

            <Grid
              fullWidth="orangery/8_Juicemenu.jpg"
            />

          </main>
        </div>
      </Fragment>
    );
  }
}

export default Orangery;
