import React, {useEffect} from "react"
import {TweenMax} from 'gsap';
import {Link} from "gatsby"

let circle = null;
let square = null;
export default() => {
    useEffect(() => {
        TweenMax.to(circle, 2, {
            y: -10,
            repeat: -1,
            ease: "none",
            yoyo: true
        });

        TweenMax.to(square, 2, {
            rotation: 360,
            repeat: -1,
            ease: "none"
        });
    }, [])
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
                            <h3>Our success is the sum of Excellence, Value, and Technology.</h3>
                            <p>
                                Drop a note and let us know what’s on your mind!
                            </p>
                        </div>
                        <div className="button-section">
                            <Link to="/contact-us">
                                <button className="btn-orange-color footer-org-button">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                        <div
                            ref={el => {
                                circle = el
                            }}
                            className="button-bl"></div>
                        <div
                            className="rotate-div"
                            ref={el => {
                                square = el
                            }}>
                            <div className="squre-angle"></div>
                        </div>
                    </div>
                    <div className="footer-logo">
                        <div className="footer-logo-img">
                            <img
                                src={require("../../images/geekshub-black-logo.png")}
                                alt="GeeksHub-Media"
                                loading="lazy"/>
                        </div>
                        <div className="logo-footer">
                            <ul>
                                <li className="active">
                                    <a
                                        href="https://www.facebook.com/geekshub.io"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <div className="link-images social-link-fb"></div>
                                        <div className="link-images social-link-fb-white"></div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://twitter.com/GeeksHub_io"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <div className="link-images social-link-tw"></div>
                                        <div className="link-images social-link-tw-white"></div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/geekshub.io"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <div className="link-images social-link-insta"></div>
                                        <div className="link-images social-link-insta-white"></div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/company/geekshub-io"
                                        target="_blank"
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
                            Reserved&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<Link to="/privacy-policy">Privacy
                            Policy</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
