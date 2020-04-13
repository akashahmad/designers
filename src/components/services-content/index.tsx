import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"
typeof document !== "undefined" && AOS.init()
export default () => {
  return (
    <section className="services-content">
      <div className="services-primary">
        <div>
          <div className="head-content para-font-size " data-aos="fade-up">
            <h2>
              We help brands to create preference,
              <br /> loyalty and value
            </h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.{" "}
            </p>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur
            </p>
          </div>
          <div className="card-content">
            <div>
              <div className="diamond-container" data-aos="fade-right">
                <div className="diamond-image vert-diamond"></div>
                <h2>Product Design</h2>
                <p>
                  Every product must make a statement and we’re ready to create
                  it with holistic approach to design.
                </p>
                <p>
                  We translate your business goals and objectives into
                  insightful UX, remarkable UI and distinctive{" "}
                </p>
              </div>
            </div>
            <div>
              <div className="diamond-container" data-aos="fade-left">
                <div className="diamond-image vert-diamond"></div>
                <h2>Product Design</h2>
                <p>
                  Every product must make a statement and we’re ready to create
                  it with holistic approach to design.
                </p>
                <p>
                  We translate your business goals and objectives into
                  insightful UX, remarkable UI and distinctive{" "}
                </p>
              </div>
            </div>
            <div>
              <div className="diamond-container" data-aos="fade-right">
                <div className="diamond-image vert-diamond"></div>
                <h2>Product Design</h2>
                <p>
                  Every product must make a statement and we’re ready to create
                  it with holistic approach to design.
                </p>
                <p>
                  We translate your business goals and objectives into
                  insightful UX, remarkable UI and distinctive{" "}
                </p>
              </div>
            </div>
            <div>
              <div className="diamond-container" data-aos="fade-left">
                <div className="diamond-image vert-diamond"></div>
                <h2>Product Design</h2>
                <p>
                  Every product must make a statement and we’re ready to create
                  it with holistic approach to design.
                </p>
                <p>
                  We translate your business goals and objectives into
                  insightful UX, remarkable UI and distinctive{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
