import React from "react"
import AOS from "aos"
typeof document !== "undefined" && AOS.init()
export default () => {
  return (
    <section className="home-header privacy-header">
      <div className="contact-image-bg">
        <div className="responsive-slider">
          <div className="header-res-content">
              <h2>Privacy Policy</h2>
              <p>
              We respect your privacy and for that reason we keep your personal information safe and secure.
               </p>
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
                <h2>Privacy Policy</h2>
                <p>
                 We respect your privacy and for that reason we keep your personal information safe and secure.
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
                  {/* <div className="dotted-contact small-dots"></div>
                  <div className="dotted-contact large-dots"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
