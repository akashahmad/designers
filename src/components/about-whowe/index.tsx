import React from "react"
import AOS from "aos"
typeof document !== "undefined" && AOS.init()
export default () => {
  return (
    <section className="who-we who-we-page shadow-who-we whowe-response">
      <div className="three-dots vert-move" />
      <div className="whowe-primary">
        <div className="whowe-secondery">
          <div
            className="whowe-left-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="2000"
          >
            <div className="diamond-img vert-move">
              <img src={require("../../images/diamond.png")} alt="GeeksHub-Media" loading="lazy" />
            </div>
            <div className="content para-font-size">
              <span>About</span>
              <h2>
                Insights and resources to help drive your business forward
                faster.
              </h2>
              <p>
                We build results-oriented brand strategies and continually
                refine your campaigns for the greatest outcome. From full-scale
                digital marketing and advertising strategy, right through to our
                precise execution and reporting...that's right, we've got you
                covered.
              </p>
              <p>
                Always aiming high and striving to achieve more; we apply
                strategy and creativity to everything we do. Approaching
                challenges with positivity, we are inclusive - sharing our
                skills and experience with colleagues and clients alike. The
                Designer is razor sharp, always on it. Commercial, focused and
                agile.
              </p>
            </div>
          </div>
          <div className="res-bg-whowe"></div>
          <div
            className="image-container"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="2000"
          >
            <div className="image-bg img-who-we" />
          </div>
        </div>
      </div>
    </section>
  )
}
