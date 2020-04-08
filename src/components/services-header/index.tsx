import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Nav from "../../components/navigation/index"
typeof document !== "undefined" && AOS.init()
export default () => {
  return (
    <section className="home-header services-header">
      <div className="home-main">
        <div className="home-setting">
          <div className="home-primary">
            <div className="logo-home">
              <div className="logo-container">
                <img src={require("../../images/black.png")} alt="" />
              </div>
            </div>
            <div className="navigation-home">
              <Nav />
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
                <h2>Our Agency Services</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
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
