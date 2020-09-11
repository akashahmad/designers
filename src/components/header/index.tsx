import React, { useState } from "react";
import { Link } from "gatsby";
import '../../css/translator.css';

export default () => {
  const [isToggled, setToggled] = useState(false);
 const  handleClick =()=> {
   setToggled(!isToggled)
 }
  return (
    <section className="home-header new-header">
      <div className="googletranslate" id="google_translate_element"/>
      <div className="googletranslate" id="google_translate_element1"/>
      <div className="home-main">
        {isToggled && <div className="navigation-responsive">
          <div className="overlay-bg">
            <div className="navigation-container">
              <div className="logo-responsive">
                <div className="logo-container">
                  <Link to="/">
                    <img src={require("../../images/Geek-Hub-Logo-White.png")} alt="GeeksHub-Media" loading="lazy" />
                  </Link>
                </div>
                <div>
                  <ul>
                    <li className="nav-hover">
                      <Link to="/who-we-are" className="nav-hover">Who We Are</Link>
                    </li>
                    <li className="nav-hover">
                      <Link to="/our-services">Our Services</Link>
                    </li>
                    <li className="nav-hover">
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>}
        <div className="home-setting">
          <div className="home-primary">
            <div className="logo-home">
              <div className="logo-container">
                <Link to="/">
                  <img src={require("../../images/geekshub-black-logo.png")} alt="GeeksHub-Media" loading="lazy" />
                </Link>
              </div>
            </div>
            <div className="navigation-home">
              <div className="bars-responsive" onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="svg-bg">
                <img src={require("../../images/Shape2.jpg")} alt="GeeksHub-Media" loading="lazy" />
              </div>
              <ul>
                <li>
                  <Link to="/who-we-are">Who We Are</Link>
                </li>
                <li>
                  <Link to="/our-services">Services</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
