import React from "react"
import { Link } from "gatsby"
export default () => {
  return (
    <section className="footer">
      <div className="footer-primary">
        <div className="footer-main">
          <div className="footer-banner">
            <div className="content-section">
              <div className="image-left">
                <img src={require("../../images/footer-img1.png")} alt="" />
              </div>
              <h3>We are creatives, so it might be about minions and stuff</h3>
              <p>
                We’d love to learn more about your project, business, and users.
                Drop us a note to tell us more about what you’re looking to do!
              </p>
            </div>
            <div className="button-section">
              <button className="btn-orange-color footer-org-button">
                Contact Us
              </button>
            </div>
          </div>
          <div className="footer-logo">
            <div className="footer-logo-img">
              <img src={require("../../images/Black.png")} alt="" />
            </div>
            <div className="logo-footer">
              <ul>
                <li className="active">
                  <Link to="#">
                    <i className="fa fa-facebook" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-globe" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="copy-right-section">
            <p>
              © Copyright 2019 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
