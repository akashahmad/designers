import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"
export default () => {
  AOS.init()
  return (
    <section className="agency">
      <div className="agency-main">
        <div className="agency-primary">
          <div className="agency-head" data-aos="fade-right">
            <div className="leaf-image"></div>
            <div className="agency-header">
              <h2>We have done lot of Agency Task</h2>
            </div>
          </div>
          <div className="task-container-primary">
            <div>
              <div className="task-container image-task-one">
                <div className="task-overlay">
                  <div className="centent-center">
                    <p>
                      A team of experienced developers and designers, ready to
                      help you
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="task-container image-task-two">
                <div className="task-overlay">
                  <div className="centent-center">
                    <p>
                      A team of experienced developers and designers, ready to
                      help you
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="task-container image-task-three">
                <div className="task-overlay">
                  <div className="centent-center">
                    <p>
                      A team of experienced developers and designers, ready to
                      help you
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="task-container image-task-four">
                <div className="task-overlay">
                  <div className="centent-center">
                    <p>
                      A team of experienced developers and designers, ready to
                      help you
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="task-container image-task-five">
                <div className="task-overlay">
                  <div className="centent-center">
                    <p>
                      A team of experienced developers and designers, ready to
                      help you
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="task-container image-task-six">
                <div className="task-overlay">
                  <div className="centent-center">
                    <p>
                      A team of experienced developers and designers, ready to
                      help you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
