import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import invertScroll from "../utils/invertScroll";
import Placeholder from "../images/palceholder-probject-image.jpeg";
import Placeholder2 from "../images/palceholder-probject-image-2.jpeg";
import Placeholder3 from "../images/palceholder-probject-image-3.jpeg";
class Probjects extends Component {
  componentDidMount() {
        const isDesktop = window.matchMedia("(min-width: 1000px)").matches;
    console.log("isDesktop", isDesktop);

    
    if (isDesktop) {
      var controller = new window.ScrollMagic.Controller({ vertical: false });

      var tween = window.TweenMax.to("#target", 1, { width: "+=150px" });
      var tween2 = window.TweenMax.to("#target2", 1, { width: "+=150px" });
      var tween3 = window.TweenMax.to("#target3", 1, { width: "+=150px" });
      var tween4 = window.TweenMax.to("#target4", 1, { width: "+=150px" });

      const halfScreenWidth = window.innerWidth / 2;

      new window.ScrollMagic.Scene({
        triggerElement: "#target",
        duration: halfScreenWidth,
      })
        .setTween(tween)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

      new window.ScrollMagic.Scene({
        triggerElement: "#target2",
        duration: halfScreenWidth,
      })
        .setTween(tween2)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

      new window.ScrollMagic.Scene({
        triggerElement: "#target3",
        duration: halfScreenWidth,
      })
        .setTween(tween3)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

      new window.ScrollMagic.Scene({
        triggerElement: "#target4",
        duration: halfScreenWidth,
      })
        .setTween(tween4)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
    } else {
      var controller = new window.ScrollMagic.Controller({});

      var tween = window.TweenMax.to("#target", 1, { left: "0%" });
      var tween2 = window.TweenMax.to("#target2", 1, { left: "0%" });
      var tween3 = window.TweenMax.to("#target3", 1, { left: "0%" });
      var tween4 = window.TweenMax.to("#target4", 1, { left: "0%" });

      const halfScreenWidth = window.innerWidth / 2;

      new window.ScrollMagic.Scene({
        triggerElement: "#target",
        duration: halfScreenWidth,
        reverse: false,
      })
        .setTween(tween)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

      new window.ScrollMagic.Scene({
        triggerElement: "#target2",
        duration: halfScreenWidth,
        reverse: false,
      })
        .setTween(tween2)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

      new window.ScrollMagic.Scene({
        triggerElement: "#target3",
        duration: halfScreenWidth,
        reverse: false,
      })
        .setTween(tween3)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

      new window.ScrollMagic.Scene({
        triggerElement: "#target4",
        duration: halfScreenWidth,
        reverse: false,
      })
        .setTween(tween4)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
    }
  }


  render() {
    return (
      <Fragment>
        <div className="layoutWrapper">
          <div className="probjectContent component">
            <h2 id="introHeading">Selected Work</h2>
            <p className="pre">
              Here are a few projects that I have done on a freelance basis,
              where I have neem the sole creative on the project. Want to see
              more of my work.
            </p>
            <a className="link" href="mailto:rob@ludusdesign.co.uk">
              Get in touch
            </a>
          </div>
        </div>

        <div className="probjectWrapper">
          <div className="layoutWrapper">
            <div
              className="probjectContent component"
              style={{ justifyContent: "flex-end" }}
            >
              <div id="target" className="thumbnailWrapper">
                <Link to="/worklock">
                  <div className="imageWrapper">
                    <img id="hello" className="thumbnail" src={Placeholder} />
                    <div className="thumbnailContent">
                      <p className="thumbnailNumber">01.</p>
                      <p className="thumbnailTitle">WorkLock</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="layoutWrapper">
            <div
              className="probjectContent component"
              style={{ justifyContent: "flex-end" }}
            >
              <div id="target2" className="thumbnailWrapper">
                <div className="imageWrapper">
                  <img id="hello" className="thumbnail" src={Placeholder2} />
                  <div className="thumbnailContent">
                    <p className="thumbnailNumber">02.</p>
                    <p className="thumbnailTitle">the Winchester Orangery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="layoutWrapper">
            <div
              className="probjectContent component"
              style={{ justifyContent: "flex-end" }}
            >
              <div id="target3" className="thumbnailWrapper">
                <div className="imageWrapper">
                  <img id="hello" className="thumbnail" src={Placeholder3} />
                  <div className="thumbnailContent">
                    <p className="thumbnailNumber">03.</p>
                    <p className="thumbnailTitle">WorkLock</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="layoutWrapper">
            <div
              className="probjectContent component"
              style={{ justifyContent: "flex-end" }}
            >
              <div id="target4" className="thumbnailWrapper">
                <div className="imageWrapper">
                  <img id="hello" className="thumbnail" src={Placeholder} />
                  <div className="thumbnailContent">
                    <p className="thumbnailNumber">04.</p>
                    <p className="thumbnailTitle">the Winchester Orangery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Probjects;
