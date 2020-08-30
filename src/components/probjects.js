import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ThumbnailQiva from "../images/probjects/thumbnails/01_QIVA.jpg";
import ThumbnailOrangery from "../images/probjects/thumbnails/02_TWO.jpg";
import ThumbnailShelterBox from "../images/probjects/thumbnails/03_SB.jpg";
import ThumbnailWorkLock from "../images/probjects/thumbnails/04_WL.jpg";
import ThumbnailLockdown from "../images/probjects/thumbnails/05_LL.jpg";



class Probjects extends Component {
  constructor(props) {
    super(props);
    // this.controller = null;
  }
  componentDidMount() {
      const isDesktop = window.matchMedia("(min-width: 1000px)").matches;

    if (isDesktop) {
      this.controller = new window.ScrollMagic.Controller({ vertical: false });
      this.tween = window.TweenMax.to("#hello", 1, {scaleY:1.32, scaleX:1.45, ease:"power3", transformOrigin:"bottom left"});
      this.tween2 = window.TweenMax.to("#hello2", 1, {scaleY:1.32, scaleX:1.45, ease:"power3", transformOrigin:"bottom left"});
      this.tween3 = window.TweenMax.to("#hello3", 1, {scaleY:1.32, scaleX:1.45, ease:"power3", transformOrigin:"bottom left"});
      this.tween4 = window.TweenMax.to("#hello4", 1, {scaleY:1.32, scaleX:1.45, ease:"power3", transformOrigin:"bottom left"});
      this.tween5 = window.TweenMax.to("#hello5", 1, {scaleY:1.32, scaleX:1.45, ease:"power3", transformOrigin:"bottom left"});

      const halfScreenWidth = window.innerWidth / 2;

      this.scene = new window.ScrollMagic.Scene({
        triggerElement: "#hello",
        duration: halfScreenWidth,
      })
        .setTween(this.tween)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(this.controller);

      this.scene2 = new window.ScrollMagic.Scene({
        triggerElement: "#hello2",
        duration: halfScreenWidth,
      })
        .setTween(this.tween2)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(this.controller);

      this.scene3 = new window.ScrollMagic.Scene({
        triggerElement: "#hello3",
        duration: halfScreenWidth,
      })
        .setTween(this.tween3)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(this.controller);

      this.scene4 = new window.ScrollMagic.Scene({
        triggerElement: "#hello4",
        duration: halfScreenWidth,
      })
        .setTween(this.tween4)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(this.controller);

      this.scene5 = new window.ScrollMagic.Scene({
        triggerElement: "#hello5",
        duration: halfScreenWidth,
      })
        .setTween(this.tween5)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(this.controller);
    } else {
      this.controller = new window.ScrollMagic.Controller({ });
      console.log('this.controller mob', this.controller);

      this.tween = window.TweenMax.to("#target", 1, { left: "0%" });
      this.tween2 = window.TweenMax.to("#target2", 1, { left: "0%" });
      this.tween3 = window.TweenMax.to("#target3", 1, { left: "0%" });
      this.tween4 = window.TweenMax.to("#target4", 1, { left: "0%" });
      this.tween5 = window.TweenMax.to("#target4", 1, { left: "0%" });

      const halfScreenWidth = window.innerWidth / 2;

      this.scene = new window.ScrollMagic.Scene({
        triggerElement: "#target",
        duration: halfScreenWidth,
        reverse: false,
      })
        .setTween(this.tween)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(this.controller);

      this.scene2 = new window.ScrollMagic.Scene({
        triggerElement: "#target2",
        duration: halfScreenWidth,
        reverse: false,
      })
        .setTween(this.tween2)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(this.controller);

      this.scene3 = new window.ScrollMagic.Scene({
        triggerElement: "#target3",
        duration: halfScreenWidth,
        reverse: false,
      })
        .setTween(this.tween3)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(this.controller);

      this.scene4 = new window.ScrollMagic.Scene({
        triggerElement: "#target4",
        duration: halfScreenWidth,
        reverse: false,
      })
        .setTween(this.tween4)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(this.controller);

      this.scene5 = new window.ScrollMagic.Scene({
        triggerElement: "#target5",
        duration: halfScreenWidth,
        reverse: false,
      })
        .setTween(this.tween4)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(this.controller);
    }
  }

  componentWillUnmount() {
    this.controller.destroy(true);
    this.controller = null;

    this.tween = null;
    this.tween2 = null;
    this.tween3 = null;
    this.tween4 = null;
    this.tween5 = null;


    this.scene.destroy(true);
    this.scene2.destroy(true);
    this.scene3.destroy(true);
    this.scene4.destroy(true);
    this.scene5.destroy(true);
    this.scene = null;
    this.scene2 = null;
    this.scene3 = null;
    this.scene4 = null;
    this.scene5 = null;
  }


  render() {
    return (
      <Fragment>
        <div className="probjectWrapper" id="menu-probjects">
          <div className="layoutWrapper probject" id="introHeading">
            <div
              className="probjectContent component"
              style={{ justifyContent: "flex-end" }}
            >
              <div id="target" className="thumbnailWrapper">
                <Link to="/qiva">
                  <div className="imageWrapper">
                    <img id="hello" className="thumbnail" src={ThumbnailQiva} />
                    <div className="thumbnailContent">
                      <p className="thumbnailNumber font__small">01.</p>
                      <p className="thumbnailTitle font__medium">Qiva</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="layoutWrapper probject">
            <div
              className="probjectContent component"
              style={{ justifyContent: "flex-end" }}
            >
              <div id="target2" className="thumbnailWrapper">
              <Link to="/orangery">
                <div className="imageWrapper">
                  <img id="hello2" className="thumbnail" src={ThumbnailOrangery} />
                  <div className="thumbnailContent">
                    <p className="thumbnailNumber font__small">02.</p>
                    <p className="thumbnailTitle font__medium">The Winchester Orangery</p>
                  </div>
                </div>
              </Link>
              </div>
            </div>
          </div>
          <div className="layoutWrapper probject">
            <div
              className="probjectContent component"
              style={{ justifyContent: "flex-end" }}
            >
              <div id="target3" className="thumbnailWrapper">
              <Link to="/shelter-box">
                <div className="imageWrapper">
                  <img id="hello3" className="thumbnail" src={ThumbnailShelterBox} />
                  <div className="thumbnailContent">
                    <p className="thumbnailNumber font__small">03.</p>
                    <p className="thumbnailTitle font__medium">ShelterBox COVID-19 Appeal</p>
                  </div>
                </div>
              </Link>
              </div>
            </div>
          </div>
          <div className="layoutWrapper probject">
            <div
              className="probjectContent component"
              style={{ justifyContent: "flex-end" }}
            >
              <div id="target4" className="thumbnailWrapper">
              <Link to="/worklock">
                <div className="imageWrapper">
                  <img id="hello4" className="thumbnail" src={ThumbnailWorkLock} />
                  <div className="thumbnailContent">
                    <p className="thumbnailNumber font__small">04.</p>
                    <p className="thumbnailTitle font__medium">WorkLock Rebrand</p>
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="layoutWrapper probject">
            <div
              className="probjectContent component"
              style={{ justifyContent: "flex-end" }}
            >
              <div id="target5" className="thumbnailWrapper">
              <Link to="/lockdown-ludere">
                <div className="imageWrapper">
                  <img id="hello5" className="thumbnail" src={ThumbnailLockdown} />
                  <div className="thumbnailContent">
                    <p className="thumbnailNumber font__small">05.</p>
                    <p className="thumbnailTitle font__medium">Lockdown Ludere</p>
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Probjects;
