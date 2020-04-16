import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"

typeof document !== "undefined" && AOS.init()
export default () => {
  return (
    <section className="home-header">
      <div className="slider-image-res overlay">
        <div className="slider-home-res ">
          <div className="header-res-content">
              <h2>Let’s talk about your great ambitionss</h2>
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
                <div className="homepage" />
                <div className="follower-image">
                  <img src={require("../../images/boti.png")} alt="GeeksHub-Media" loading="lazy"/>
                </div>
                <div className="been-image vert-move">
                  <img src={require("../../images/bean.svg")} alt="GeeksHub-Media" loading="lazy" />
                  <img
                    className="dots-been"
                    src={require("../../images/b-dots.png")}
                    alt="GeeksHub-Media" loading="lazy"
                  />
                  <img
                    className="dots-right"
                    src={require("../../images/b-dots.png")}
                    alt="GeeksHub-Media" loading="lazy"
                  />
                </div>
              </div>
              <div className="below-side">
                <img src={require("../../images/side-image.jpg")} alt="GeeksHub-Media" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
