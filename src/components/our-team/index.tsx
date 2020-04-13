import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"
typeof document !== "undefined" && AOS.init()
export default () => {
    return (
        <section className="our-team">
            <div className="our-team-primary">
                <div className="our-team-head">
                    <h2>Our Team</h2>
                </div>
                <div className="team">
                    <div>
                        <div className="team-primary">
                            <div
                                className="team-container-img profile-two"
                                data-aos="flip-left"
                            ></div>
                            <div className="name-profile">
                                <h3>Akash Ahmad</h3>
                                <p>Co-Founder and CTO</p>
                            </div>
                            <div className="social-link">
                                <div className="social-container">
                                    <a href="/#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </div>
                                <div className="social-container">
                                    <a href="/#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="team-primary">
                            <div
                                className="team-container-img profile-one"
                                data-aos="flip-left"
                            ></div>
                            <div className="name-profile">
                                <h3>Muqarrab Khan</h3>
                                <p>Co-Founder and UI/UX Designer</p>
                            </div>
                            <div className="social-link">
                                <div className="social-container">
                                    <a href="/#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </div>
                                <div className="social-container">
                                    <a href="/#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
