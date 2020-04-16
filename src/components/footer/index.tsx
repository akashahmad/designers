import React from "react"
import {Link} from "gatsby"

export default () => {
    return (
        <section className="footer">
            <div className="footer-primary">
                <div className="footer-main">
                    <div className="footer-banner">
                        <div className="dotted-image"></div>
                        <div className="content-section">
                            <div className="image-left">
                                <img src={require("../../images/ftr.png")} alt="GeeksHub-Media" loading="lazy"/>
                            </div>
                            <h3>We are creatives, so it might be about minions and stuff</h3>
                            <p>
                                We’d love to learn more about your project, business, and users.
                                Drop us a note to tell us more about what you’re looking to do!
                            </p>
                        </div>
                        <div className="button-section">
                            <Link to="/contact-us">
                                <button className="btn-orange-color footer-org-button">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                        <div className="button-bl vert-balloon"></div>
                         <div className="rotate-div rotate"><div className="squre-angle"></div></div>
                    </div>
                    <div className="footer-logo">
                        <div className="footer-logo-img">
                            <img src={require("../../images/geekshub-black-logo.png")} alt="GeeksHub-Media" loading="lazy"/>
                        </div>
                        <div className="logo-footer">
                            <ul>
                                <li className="active">
                                    <a href="https://www.facebook.com/geekshub.io" target="_blank"
                                       rel="noopener noreferrer">
                                        <div className="link-images social-link-fb"></div>
                                        <div className="link-images social-link-fb-white"></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/Geeks__Hub" target="_blank" rel="noopener noreferrer">
                                        <div className="link-images social-link-tw"></div>
                                        <div className="link-images social-link-tw-white"></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/geeks._.hub" target="_blank"
                                       rel="noopener noreferrer">
                                        <div className="link-images social-link-insta"></div>
                                        <div className="link-images social-link-insta-white"></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/43286270" target="_blank"
                                       rel="noopener noreferrer">
                                        <div className="link-images social-link-linkedin"></div>
                                        <div className="link-images social-link-linkedin-white"></div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="copy-right-section">
                        <p>
                            © Copyright 2020 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;All Rights
                            Reserved
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
