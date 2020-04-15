import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import {Link} from "gatsby"
typeof document !== "undefined" && AOS.init()
export default () => {
    return (
        <section className="our-sevices">
            <div className="our-sevices-image"/>
            <div className="our-services-main">
                <div className="our-sevices-primary">
                    <div
                        className="sevices-content"
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="2000"
                    >
                        <div className="content para-font-size">
                            <span>Our Services</span>
                            <h2>
                                We transform your product into the business tool it's meant to be
                            </h2>
                        </div>
                        <div className="btn-div">
                            <Link to="/our-services">
                                <button className="btn-orange-color who-btn">
                                    View Services
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="services-card-container"
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="2000"
                    >
                        <div className="card-container">
                            <div className="head-img">
                                <img src={require("../../images/whiterect.png")} alt="GeeksHub-Media" loading="lazy"/>
                            </div>
                            <div className="card-content para-font-size">
                                <h2>Creative Design</h2>
                                <p>
                                    Designing UI and UX is our area of expertise, and remains the
                                    lifeblood of our business to this today.
                                </p>
                            </div>
                        </div>
                        <div className="card-container card-set">
                            <div className="head-img vert-card service-card">
                                <img src={require("../../images/ribbon.png")} alt="GeeksHub-Media" loading="lazy"/>
                            </div>
                            <div className="card-content para-font-size">
                                <h2>Web App Development</h2>
                                <p>
                                    Bring your vision to life with next-generation web solutions
                                </p>
                            </div>
                        </div>
                        <div className="card-container card-set">
                            <div className="head-img vert-card service-card">
                                <img src={require("../../images/whiterect.png")} alt="GeeksHub-Media" loading="lazy"/>
                            </div>
                            <div className="card-content para-font-size">
                                <h2>Mobile App Development</h2>
                                <p>Transform your idea into the next killer mobile app</p>
                            </div>
                        </div>
                        <div className="card-container card-set">
                            <div className="head-img vert-card service-card">
                                <img src={require("../../images/ribbon.png")} alt="GeeksHub-Media" loading="lazy"/>
                            </div>
                            <div className="card-content para-font-size">
                                <h2>Technology Modernization</h2>
                                <p>Don't stand still - future-proof your legacy software</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
