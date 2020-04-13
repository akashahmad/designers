import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"
typeof document !== "undefined" && AOS.init()
export default () => {
  return (
    <section className="who-we">
      <div className="three-dots vert-move" />
      <div className="whowe-primary">
        <div className="whowe-secondery">
          <div
            className="whowe-left-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="2000"
          >
            <div className="diamond-img vert-move ">
              <img src={require("../../images/diamond.png")} alt="" />
            </div>
            <div className="content para-font-size">
              <span>Who We Are</span>
              <h2>
                Insights and resources to help drive your business forward
                faster.
              </h2>
              <p>
                We build results-oriented brand strategies and continually
                refine your campaigns for the greatest outcome. From full-scale
                design interface to development, right through to our precise
                execution and reporting...that's right, we've got you covered
              </p>
            </div>
            <div className="btn-div">
              <button className="btn-orange-color who-btn">
                Read Success Story
              </button>
            </div>
          </div>
          <div
            className="image-container"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="2000"
          >
            <div className="image-bg" />
          </div>
        </div>
      </div>
    </section>
  )
}
