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
                <img src={require("../../images/reactjs.png")} />
              </div>
              <div className="circle-tech nodejs-color vert-other ">
                <img src={require("../../images/nodejs.png")} />
              </div>
              <div className="circle-tech mysql-color vert-move">
                <img src={require("../../images/MySQL.png")} />
              </div>
              <div className="circle-tech next-color vert-other ">
                <img
                  src={require("../../images/next-js-logo-7929BCD36F-seeklogo.com.png")}
                />
              </div>
              <div className="circle-tech mongo-color vert-move">
                <img
                  src={require("../../images/mongo-db-design-mongodb-logo-mongodb-11562879783zbmzcchmau.png")}
                />
              </div>
              <div className="circle-tech gatsby-color vert-other ">
                <img src={require("../../images/gatsby.png")} />
              </div>
              <div className="circle-tech rest-color vert-move">
                <img src={require("../../images/rest-api.png")} />
              </div>
              <div className="circle-tech graph-color vert-other ">
                <img src={require("../../images/graphql.png")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
