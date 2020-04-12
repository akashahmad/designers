import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Header from "../../components/header/index"
import { Link } from "gatsby"
typeof document !== "undefined" && AOS.init()
export default () => {
  return (
    <section className="home-header whowe-header">
      <Header />
      <div className="slider-section">
        <div className="image-gril"></div>
        <div className="image-pink vert-pink"></div>
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
