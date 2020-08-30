import React from "react";
import Divider from "../components/Divider";

const About = () => {
  return (
      <div className="about" id="about">
      <div style={{ position: 'relative', display: 'inline-block' }}>
      <div className="layoutWrapper aboutWrapper">
        <div className="probjectContent component">
          <div className="intro">
            <h2 className="font__extra-large">About Me</h2>
              <p className="font__medium">
                A Hampshire based designer with five years of experience working
                at digital agencies, marketing agencies and freelancing
              </p>
          </div>
        </div>
        </div>
        <Divider ThirdWidth white />
      </div>


      <div style={{ position: 'relative', display: 'inline-block' }}>
        <div className="layoutWrapper aboutWrapper">
          <div className="probjectContent component">
            <div className="skillSet">
              <h6 className="font__extra-small bold">Skill Set</h6>
              <ul className="font__large">
                <li>Brand Identity and Positioning</li>
                <li>Graphic Design</li>
                <li>Web and UX Design</li>
                <li>Illustration</li>
                <li>Motion Design</li>
                <li>Creative Direction</li>
              </ul>
            </div>
          </div>
        </div>
        <Divider FullWidth white />
      </div>

      <div className="layoutWrapper aboutWrapper">
        <div className="probjectContent component">
          <div className="experience">
            <div className="interests">
              <div className="col2">
                <h6 className="font__extra-small">Current Postitions</h6>
                <div>
                <a href="https://www.think-creative.co.uk/" className="font__small">
                  Think Creative
                </a><span className="font__small"> - designer</span></div>
              </div>
              
              <div className="col2">
              <h6 className="font__extra-small">Achievments</h6>
              <div className="font__small">
                <p>Distinction in Creative multimedia and Design FDA</p>
                <p>
                  A levels in Media Studies, Music Technolog and English
                  Lit/Lang
                </p>
                <p>250kg Deadlift</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="layoutWrapper aboutWrapper">
        <div className="probjectContent component">
          <div className="experience">
            <div className="interests">
              <div className="col2">
                <h6 className="font__extra-small">Interests and preferences</h6>
                <ul className="font__small">
                  <li>Playing Guitar</li>
                  <li>Strenth and conditioning</li>
                  <li>Eating Lasagne</li>
                  <li>Black coffee</li>
                  <li>Video games</li>
                  <li>Jaffa cakes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default About;
