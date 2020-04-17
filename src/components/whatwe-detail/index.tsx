import React from "react"
import AOS from "aos"
typeof document !== "undefined" && AOS.init()
export default () => {
  return (
    <section className="what-we-detail">
      <div className="what-we-primary">
        <div className="whatwe-main">
          <div className="image-container">
            <div
              className="img-one"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
            ></div>
            <div
              className="img-two"
              data-aos="flip-left"
              data-aos-delay="50"
              data-aos-duration="1000"
            ></div>
          </div>
          <div className="content-container para-font-size">
            <div>
              <h2>Why Do We Exist?</h2>
              <p>
                We believe every business owner should have an online presence
                that clearly expresses their unique offering to the world. We
                have a unique passion for under represented, minority owned
                businesses who don’t always have the resources to invest in
                modern marketing.
              </p>
            </div>
            <div>
              <h2>How Do We Do It?</h2>
              <p>
                We pinpoint the objective of each business we work with, build a
                comprehensive strategy (with specific timelines and budgets in
                mind) and get to work on making growth goals come true! We
                mobilize our team to execute on winning you new customers
                through a measurable and intentional plan of action. Technology
                and marketing should be fun and easy!
              </p>
            </div>
            <div>
              <h2>What Do We Do Best?</h2>
              <p>
                We craft world-class marketing strategies, custom designed web
                applications, mobile applications, for multicultural business
                owners
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
