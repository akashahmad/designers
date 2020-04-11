import React from "react"
import { Link } from "gatsby"
import AOS from "aos"
import "aos/dist/aos.css"
import Nav from "../../components/navigation/index"
typeof document !== "undefined" && AOS.init()
export default () => {
  return (
    <section className="home-header contact-header">
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
              <Nav />
            </div>
          </div>
        </div>
      </div>
      <div className="slider-section">
        <div className="image-gril"></div>
        <div className="image-pink"></div>
        <div className="home-setting">
          <div className="content-slider">
            <div
              className="content-image"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="content-div para-font-size">
                <h2>Contact Us </h2>
                <p>
                  Lorem ipsum dolor sit amet, con sectetu adipiscing elit. In
                  sagittis egestas ante, sed viverra nunc.k.
                </p>
              </div>
            </div>
            <div className="home-right-slider">
              <div
                className="without-stroke"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <div className="services-head-image">
                  <div className="dotted-contact small-dots"></div>
                  <div className="dotted-contact large-dots"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
