import React from "react"
import { Link } from "gatsby"
export default () => {
  return (
    <section>
      <div className="home-main">
        <div className="home-setting">
          <div className="home-primary">
            <div className="logo-home">
              <div className="logo-container">
                <Link to="/">
                  <img src={require("../../images/Black.png")} alt="" />
                </Link>
              </div>
            </div>
            <div className="navigation-home">
              <div className="svg-bg">
                <img src={require("../../images/Shape2.jpg")} alt="" />
              </div>
              <ul>
                <li>
                  <Link to="whowe">Who We Are</Link>
                </li>
                <li>
                  <Link to="services">Services</Link>
                </li>
                <li>
                  <Link to="#">Protfolio</Link>
                </li>
                <li>
                  <Link to="contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
