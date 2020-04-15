import React from "react"
import { Link } from "gatsby"
import AOS from "aos"
import "aos/dist/aos.css"
import Header from "../../components/header/index"
typeof document !== "undefined" && AOS.init()
export default () => {
  return (
    <section className="home-header services-header">
      <Header />
      <div className="slider-image-res">
        <div className="responsive-slider">
          <div className="header-res-content">
              <h2>Let’s talk about your great ambitions</h2>
              <p>We partner with organizations that are looking to create greater impact in their work and the world around them.</p>
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
                <h2>Who We Are</h2>
                <p>
                  It’s important for us to adhere our values, as they embody our
                  agency and define the way that we work.
                </p>
              </div>
            </div>
            <div className="home-right-slider">
              <div
                className="stroke-container"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <div className="services-head-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}