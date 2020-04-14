import React from "react"
import Header from "../../components/header/index"
import AOS from "aos"
import { Link } from "gatsby"
import "aos/dist/aos.css"

typeof document !== "undefined" && AOS.init()
export default () => {
  return (
    <section className="home-header">
      <Header />
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
                  <img src={require("../../images/boti.png")} alt="" />
                </div>
                <div className="been-image vert-move">
                  <img src={require("../../images/bean.svg")} alt="" />
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
