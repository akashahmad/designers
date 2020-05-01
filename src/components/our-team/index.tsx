import React from "react"
import AOS from "aos"
import './style.css'
import {Carousel} from 'react-responsive-carousel';
typeof document !== "undefined" && AOS.init()
export default () => {
    return (
        <section className="our-team">
            <div className="our-team-primary">
                <div className="our-team-head">
                    <h2>Founders</h2>
                </div>
                <div className="responsive-slider-team">
                    <Carousel showThumbs={false} showArrows={false} showStatus={false}>
                        <div className="slider-settings">
                            <div className="team-primary">
                                <div
                                    className="team-container-img profile-one"
                                ></div>
                                <div className="name-profile">
                                    <h3>Akash Ahmad</h3>
                                    <p>Co-Founder and CTO</p>
                                </div>
                                {/* <div className="social-link">
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
                                </div> */}
                            </div>
                        </div>
                        <div className="slider-settings">
                            <div className="team-primary">
                                <div
                                    className="team-container-img profile-two"

                                ></div>
                                <div className="name-profile">
                                    <h3>Muqarrab Khan</h3>
                                    <p>Co-Founder and Lead UI/UX Designer</p>
                                </div>
                                {/* <div className="social-link">
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
                                </div> */}
                            </div>
                        </div>
                    </Carousel>
                </div>
                <div className="team">
                    <div>
                        <div className="team-primary">
                            <div
                                className="team-container-img profile-one"
                                data-aos="flip-left"
                            ></div>
                            <div className="name-profile">
                                <h3>Akash Ahmad</h3>
                                <p>Co-Founder and CTO</p>
                            </div>
                            {/* <div className="social-link">
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
                            </div> */}
                        </div>
                    </div>
                    <div>
                        <div className="team-primary">
                            <div
                                className="team-container-img profile-two"
                                data-aos="flip-left"
                            ></div>
                            <div className="name-profile">
                                <h3>Muqarrab Khan</h3>
                                <p>Co-Founder and Lead UI/UX Designer</p>
                            </div>
                            {/* <div className="social-link">
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
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
