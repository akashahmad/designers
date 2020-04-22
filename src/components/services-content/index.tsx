import React from "react"
import AOS from "aos"
typeof document !== "undefined" && AOS.init()
export default () => {
  return (
    <section className="services-content">
      <div className="services-primary">
        <div>
          <div className="head-content para-font-size " data-aos="fade-up">
            <h2>
              We help brands to create preference,<br />loyalty and value
            </h2>
            <p>
              We are here to help you achieve success in your business that you dreamed of. With our help,
              you can stay absolutely focused on your business market, leaving all technicalities for us to
              worry about. Working with our passionate team of high achievers the success we are promising youis guaranteed.
              We plan and list for you the most efficient strategies to follow, making your way to higher ranks
              in the market. We tend to study all the technical aspects very carefully for the sake of
              compiling the best plan for you. Our goal is to provide you with the market’s limelight.
            </p>
            <p>
              We believe that the success you dreamed and hoped for when you first sat on a
              desk and decided to work on your own idea should be what you achieve and nothing less.

            </p>
          </div>
          <div className="card-content">
            <div>
              <div className="diamond-container" data-aos="fade-right">
                <div className="diamond-image vert-diamond"></div>
                <h2>Web Development</h2>
                <p>
                  We know exactly what one looks for when trying to develop a web app and our team of highly qualified and well-experienced developers,
                  architects and designers will work to provide you with not only what we know you need but better.
                </p>
              </div>
            </div>
            <div>
              <div className="diamond-container" data-aos="fade-left">
                <div className="diamond-image vert-diamond"></div>
                <h2>Mobile app development</h2>
                <p>
                  Keeping in mind that a mobile app is an interface between you and your
                  users, it has to be made with standards set accordingly.
                </p>
                <p>
                  To match the standards our team of the best UI/UX designers will work and make your user’s time worthwhile.
                </p>
              </div>
            </div>
            <div>
              <div className="diamond-container" data-aos="fade-right">
                <div className="diamond-image vert-diamond"></div>
                <h2>Technology Modernization</h2>
                <p>
                  The world we live in today is the world of technology, outdated technology is
                  a massive drawback in today’s time. Keeping ahead of all competition can be a
                  headache but it must not be a problem for you anymore as we are here to take care
                  of it for you, letting you stay focused on your business.
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
                  insightful UX, remarkable UI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
