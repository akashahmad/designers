import React from "react"
import AOS from "aos"
typeof document !== "undefined" && AOS.init()
export default () => {
  return (
    <section className="fantacy">
      <div className="fantacy-container">
        <div
          className="text-container"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="2000"
        >
          <div>
            <h2>We Are Fantasy We've got you covered on</h2>
          </div>
        </div>
        <div
          className="card-main"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="2000"
        >
          <div className="card-container">
            <div className="head-img">
              <img src={require("../../images/product design.png")} alt="GeeksHub-Media" loading="lazy" />
            </div>
            <div className="card-content para-font-size">
              <h2>Product Design</h2>
              <p>
                Every product must make a statement and we’re ready to create it
                with holistic approach to design.
              </p>
              <p>
                We translate your business goals and objectives into insightful
                UX, remarkable UI
              </p>
            </div>
          </div>
          <div className="card-container">
            <div className="head-img">
              <img src={require("../../images/moonpng.png")} alt="GeeksHub-Media" loading="lazy" />
            </div>
            <div className="card-content para-font-size">
              <h2>Creative Web Solution</h2>
              <p>
                A powerful web application to satisfy your users with a fast and innovative experience working on a modern system that we will develop exclusively for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
