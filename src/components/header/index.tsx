import React, { useState } from "react";
import { Link } from "gatsby"

export default () => {
  const [isToggled, setToggled] = useState(false);
 const  handleClick =()=> {
   setToggled(!isToggled)
 }
  return (
    <section>
      <div className="home-main">
        {isToggled && <div className="navigation-responsive">
          <div className="overlay-bg">
            <div className="navigation-container">
              <div className="logo-responsive">
                <div className="logo-container">
                  <Link to="/">
                    <img src={require("../../images/Black.png")} alt="GeeksHub-Media" />
                  </Link>
                </div>
                <div>
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
        </div>}
        <div className="home-setting">
          <div className="home-primary">
            <div className="logo-home">
              <div className="logo-container">
                <Link to="/">
                  <img src={require("../../images/Black.png")} alt="GeeksHub-Media" />
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
                <img src={require("../../images/Shape2.jpg")} alt="GeeksHub-Media" />
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
