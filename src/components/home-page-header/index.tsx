import React from "react"
import { Link } from "gatsby"
import AOS from "aos"
import "aos/dist/aos.css"
typeof document !== "undefined" && AOS.init()
export default () => {
  return (
    <section className="home-header">
      <div className="home-main">
        <div className="home-setting">
          <div className="home-primary">
            <div className="logo-home">
              <div className="logo-container">
                <img src={require("../../images/logo.png")} alt="" />
              </div>
            </div>
            <div className="navigation-home">
              <div className="svg-bg">
                <img src={require("../../images/Shape2.jpg")} alt="" />
              </div>
              <ul>
                <li>
                  <Link to="#">Who We Are</Link>
                </li>
                <li>
                  <Link to="#">Services</Link>
                </li>
                <li>
                  <Link to="#">Protfolio</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-section">
        <div className="home-setting">
          <div className="content-slider">
            <div
              className="content-image"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="content-div para-font-size">
                <h2>Let’s talk about your great ambitions</h2>
                <p>
                  We partner with organizations that are looking to create
                  greater impact in their work and the world around them.
                </p>
              </div>
            </div>
            <div className="home-right-slider">
              <div
                className="stroke-container"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="slider-image" />
                <div className="follower-image">
                  <img src={require("../../images/boti.png")} />
                </div>
                <div className="been-image">
                  <img src={require("../../images/bean.svg")} />
                  <img
                    className="dots-been"
                    src={require("../../images/b-dots.png")}
                    alt=""
                  />
                  <img
                    className="dots-right"
                    src={require("../../images/b-dots.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="below-side">
                <img src={require("../../images/side-image.jpg")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
