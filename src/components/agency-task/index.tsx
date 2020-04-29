import React from "react";
import AOS from "aos";
import "./style.css";
import { Carousel } from 'react-responsive-carousel';
typeof document !== "undefined" && AOS.init()
export default () => {
  return (
    <section className="agency">
      <div className="agency-main">
        <div className="agency-primary">
          <div className="agency-head" data-aos="fade-right">
            <div className="leaf-image vert-move" />
            <div className="agency-header">
              <h2>We have done lot of Agency Task</h2>
            </div>
          </div>
          <div className="agency-carousel">
          <Carousel>
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
          <div>2</div>
          </Carousel>
          </div>
          <div className="task-slider">
            <Carousel showThumbs={false}>
              <div>
                <img src={require('../../images/c1.jpg')} alt="GeeksHub-Media" loading="lazy" />
              </div>
              <div>
                <img src={require('../../images/c2.jpg')} alt="GeeksHub-Media" loading="lazy" />
              </div>
              <div>
                <img src={require('../../images/c3.jpg')} alt="GeeksHub-Media" loading="lazy" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
