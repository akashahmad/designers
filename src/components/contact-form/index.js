import React from "react"
export default () => {
  return (
    <section className="contact-form">
      <div className="contact-primary">
        <div className="contact-head">
          <h2>Get In Touch With Us</h2>
        </div>
        <div className="form-container">
          <div className="jaliright-container"></div>
          <div className="form-div">
            <div className="jali-container"></div>
            <div className="form-main">
              <form>
                <div className="name-input">
                  <input type="text" placeholder="Full Name" />
                </div>
                <div className="emailpass">
                  <input type="text" placeholder="Email" />
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div className="text-from">
                  <textarea>Your Message</textarea>
                </div>
                <div className="btn-container">
                  <button className="btn-orange-color btn-form">Send</button>
                </div>
              </form>
            </div>
          </div>
          <div className="quick-links">
            <div className="quick-head">
              <h2>Quick Find Us </h2>
            </div>
            <div className="quick-detail">
              <h3>Email:</h3>
              <p>info@yoursite.com</p>
            </div>
            <div className="quick-detail">
              <h3>+88 (0) 682648101</h3>
              <p>Monday–Friday 9am-6pm</p>
            </div>
            <div className="quick-detail">
              <h3>Address</h3>
              <p>51 Somestreet Cambridge,</p>
              <p>CB4 3AA, United Kingdom</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
