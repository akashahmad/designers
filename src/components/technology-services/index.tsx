import React from "react"
export default () => {
  return (
    <section className="tech-services">
      <div className="tech-head">
        <h2>Our Technologies</h2>
      </div>
      <div className="technologies">
        <div className="tech-been"></div>
        <div className="tech-dots"></div>
        <div className="technologies-primary">
          <div>
            <div className="tech-container">
              <div className="circle-tech react-color vert-move">
                <span>React JS</span>
              </div>
              <div className="circle-tech nodejs-color vert-other ">
                <span>Node Js</span>
              </div>
              <div className="circle-tech mysql-color vert-move">
                <span>My SQL</span>
              </div>
              <div className="circle-tech next-color vert-other ">
                <span>Next</span>
              </div>
              <div className="circle-tech mongo-color vert-move">
                <span>Mongo BD</span>
              </div>
              <div className="circle-tech gatsby-color vert-other ">
                <span>Gatsby</span>
              </div>
              <div className="circle-tech rest-color vert-move">
                <span>Rest Api</span>
              </div>
              <div className="circle-tech graph-color vert-other ">
                <span>GraphQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
